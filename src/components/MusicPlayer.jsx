import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const playlist = [
    "/public_iwasneverthere.mp3",
    "/public_YAD.mp3",
    "/public_escapism.mp3",
    "/public_blue.mp3",
    "/public_stars.mp3",
];

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const lastTapTime = useRef(0);
    const clickTimeout = useRef(null);
    const isPlayingRef = useRef(false);

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [infoText, setInfoText] = useState(
        "Play Music!"
    );

    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.volume = 0.6;
        audio.preload = "auto";

        return () => {
            audio.pause();
        };
    }, []);

    const playCurrentTrack = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        try {
            await audio.play();

            setIsPlaying(true);
            setInfoText("Stop Music");
        } catch (error) {
            console.error("Unable to play audio:", error);

            setIsPlaying(false);
            setInfoText("Click again to play music");
        }
    };

    const togglePlay = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlayingRef.current) {
            audio.pause();

            setIsPlaying(false);
            setInfoText("Play Music!");
        } else {
            await playCurrentTrack();
        }
    };

    const shuffleNextTrack = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        const wasPlaying = isPlayingRef.current;

        let nextIndex;

        do {
            nextIndex = Math.floor(Math.random() * playlist.length);
        } while (
            nextIndex === currentTrackIndex &&
            playlist.length > 1
            );

        setCurrentTrackIndex(nextIndex);

        audio.src = playlist[nextIndex];
        audio.load();

        if (wasPlaying) {
            try {
                await audio.play();

                setIsPlaying(true);
                setInfoText("");
            } catch (error) {
                console.error("Unable to play next track:", error);
                setIsPlaying(false);
            }
        }
    };

    const handleTrackEnd = () => {
        shuffleNextTrack();
    };

    const handleClick = () => {
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = null;

            shuffleNextTrack();
            return;
        }

        clickTimeout.current = setTimeout(() => {
            togglePlay();
            clickTimeout.current = null;
        }, 250);
    };

    const handleDoubleTapMobile = () => {
        const now = Date.now();

        if (now - lastTapTime.current < 400) {
            shuffleNextTrack();
        }

        lastTapTime.current = now;
    };

    useEffect(() => {
        const handleVolumeKeys = (e) => {
            const audio = audioRef.current;

            if (!audio) return;

            if (e.key === "ArrowUp") {
                e.preventDefault();

                audio.volume = Math.min(
                    1,
                    Math.round((audio.volume + 0.05) * 100) / 100
                );
            }

            if (e.key === "ArrowDown") {
                e.preventDefault();

                audio.volume = Math.max(
                    0,
                    Math.round((audio.volume - 0.05) * 100) / 100
                );
            }
        };

        window.addEventListener(
            "keydown",
            handleVolumeKeys,
            { passive: false }
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleVolumeKeys
            );
        };
    }, []);

    useEffect(() => {
        return () => {
            if (clickTimeout.current) {
                clearTimeout(clickTimeout.current);
            }
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-6 z-50 flex flex-col items-end gap-2">

            <p className="text-xs text-gray-400 italic text-right max-w-[220px]">
                {infoText}
            </p>

            <audio
                ref={audioRef}
                src={playlist[currentTrackIndex]}
                onEnded={handleTrackEnd}
                preload="auto"
            />

            <button
                type="button"
                onClick={handleClick}
                onTouchStart={handleDoubleTapMobile}
                aria-label={
                    isPlaying
                        ? "Pause music"
                        : "Play music"
                }
                className="
                    group
                    w-14 h-14
                    rounded-full
                    flex items-center justify-center
                    bg-red-500
                    text-white
                    shadow-[0_0_15px_rgba(239,68,68,0.5)]
                    hover:shadow-[0_0_25px_rgba(239,68,68,0.8)]
                    hover:scale-110
                    active:scale-95
                    transition-all
                    duration-300
                "
            >
                <span className="transition-transform duration-300 group-hover:scale-110">
                    {isPlaying ? (
                        <FaPause size={18} />
                    ) : (
                        <FaPlay size={18} />
                    )}
                </span>
            </button>

        </div>
    );
};

export default MusicPlayer;