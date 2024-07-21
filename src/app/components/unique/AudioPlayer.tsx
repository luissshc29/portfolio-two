"use client";

import { Slider } from "@/shadcn/components/ui/slider";
import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { LuRotateCcw } from "react-icons/lu";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

export default function AudioPlayer({ url }: { url: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);

  // Handles progress change when user selects
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  function handleProgressSelection(curr: any) {
    setAudioCurrentTime(curr);
  }

  // Handles play, pause and reset
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [audioReset, setAudioReset] = useState(false);
  function handlePlayPauseReset() {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      if (audioReset) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setAudioReset(false);
      }
      setAudioPlaying(!audioPlaying);
    }
  }

  // Handles progress change when playing
  function handleProgressUpdate() {
    if (audioRef.current && !isSeeking) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  }

  // Handles progress change when user commits
  function handleValueCommit(curr: number) {
    if (audioRef.current) {
      audioRef.current.currentTime = curr;
    }
  }

  // Defines if user is clicking or touching the progress bar, while selecting progress
  const [isSeeking, setIsSeeking] = useState(false);
  function handleSeekStart() {
    setIsSeeking(true);
  }
  function handleSeekEnd() {
    setIsSeeking(false);
  }

  // Handles audio muting
  const [isMuted, setIsMuted] = useState(false);
  function handleMute() {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }

  useEffect(() => {
    // Wait until audio metadata was fully loaded to set audioDuration
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setAudioDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
      }
    };
  }, [url]);

  return (
    <div>
      <div className="flex h-10 w-[280px] items-center justify-center rounded-sm border-[2px] border-neutral-600 bg-transparent p-2 md:w-[350px] lg:w-[500px]">
        <div className="flex w-full items-center justify-evenly gap-1 text-lg md:text-2xl">
          <audio
            ref={audioRef}
            src={url}
            onTimeUpdate={() => handleProgressUpdate()}
            onEnded={() => {
              setAudioPlaying(false);
              setAudioReset(true);
            }}
          />
          <button onClick={() => handlePlayPauseReset()}>
            {audioPlaying ? (
              <IoIosPause />
            ) : audioReset ? (
              <LuRotateCcw />
            ) : (
              <IoIosPlay />
            )}
          </button>
          <div className="flex w-fit items-center gap-[1px] text-xs md:text-sm">
            {Math.floor(audioCurrentTime / 60)}:
            {Math.floor(audioCurrentTime % 60)
              .toString()
              .padStart(2, "0")}{" "}
            / {Math.floor(audioDuration / 60)}:
            {Math.floor(audioDuration % 60)
              .toString()
              .padStart(2, "0")}
          </div>
          <Slider
            max={audioDuration}
            onValueCommit={(e) => handleValueCommit(e[0])}
            onValueChange={(e) => handleProgressSelection(e[0])}
            value={[audioCurrentTime]}
            step={1}
            onPointerDown={() => handleSeekStart()}
            onPointerUp={() => handleSeekEnd()}
            onTouchStart={() => handleSeekStart()}
            onTouchEnd={() => handleSeekEnd()}
            className="w-1/2 scale-[.8] hover:cursor-pointer lg:w-2/3 lg:scale-100"
          />
          <button onClick={() => handleMute()}>
            {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
          </button>
        </div>
      </div>
    </div>
  );
}
