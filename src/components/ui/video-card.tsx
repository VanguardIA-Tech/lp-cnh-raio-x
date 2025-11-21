"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";

type Preload = "auto" | "metadata" | "none" | undefined;

export type VideoCardProps = {
  src: string;
  className?: string; // wrapper classes
  videoClassName?: string; // video element classes
  overlayClassName?: string | null; // null to disable overlay
  contentWrapperClassName?: string; // wrapper for children slot
  contentContainerClassName?: string; // inner bubble/container class
  children?: ReactNode; // optional bottom content
  fill?: boolean; // make video absolute fill container
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: Preload;
  // Dialog options
  clickToOpen?: boolean; // when true, clicking opens a modal with the video
  dialogTitle?: string;
  dialogClassName?: string;
  controlsInDialog?: boolean;
  dialogVideoClassName?: string; // customize video sizing inside dialog
  dialogFit?: "contain" | "cover"; // adjust how video fills the dialog
};

export function VideoCard({
  src,
  className,
  videoClassName,
  overlayClassName = "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent",
  contentWrapperClassName = "pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center p-6",
  contentContainerClassName = "w-fit rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm",
  children,
  fill = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  clickToOpen = false,
  dialogTitle,
  dialogClassName,
  controlsInDialog = true,
  dialogVideoClassName,
  dialogFit = "contain",
}: VideoCardProps) {
  const CardContent = (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[color:var(--color-border-slate-700)] bg-white/5",
        className
      )}
      role={clickToOpen ? "button" : undefined}
      tabIndex={clickToOpen ? 0 : undefined}
      aria-label={clickToOpen ? (dialogTitle || "Abrir vídeo") : undefined}
    >
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        className={cn(
          fill ? "absolute inset-0 h-full w-full object-cover" : "h-full w-full object-cover",
          videoClassName
        )}
      />
      {overlayClassName && <div aria-hidden="true" className={overlayClassName} />}
      {children && (
        <div className={contentWrapperClassName}>
          <div className={contentContainerClassName}>{children}</div>
        </div>
      )}
    </div>
  );

  if (!clickToOpen) return CardContent;

  return (
    <Dialog>
      <DialogTrigger asChild>{CardContent}</DialogTrigger>
      <DialogContent className={cn("w-[92vw] max-w-[1000px] p-0 bg-black/80 text-white border-0 sm:rounded-xl", dialogClassName)}>
        <DialogTitle className="sr-only">{dialogTitle || "Vídeo"}</DialogTitle>
        <DialogClose className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-3 py-1 text-lg leading-none hover:bg-black/80">
          ×
        </DialogClose>
        <video
          src={src}
          autoPlay
          loop={loop}
          muted={false}
          controls={controlsInDialog}
          playsInline
          preload={preload}
          className={cn(
            "mx-auto block w-full",
            dialogFit === "cover" ? "h-[85vh] object-cover" : "h-auto max-h-[85vh] object-contain",
            dialogVideoClassName
          )}
        />
      </DialogContent>
    </Dialog>
  );
}

export default VideoCard;