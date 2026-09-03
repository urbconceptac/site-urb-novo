import React, { useState, useEffect, useRef } from 'react';
import { SPOTS_DATA } from '../data/spotsData';
import { Play, Pause, Copy, Check, Volume2, VolumeX, Download, FileText } from 'lucide-react';

export const MinimalScriptsAndPlayer: React.FC = () => {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [bgmEnabled, setBgmEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeSpot = SPOTS_DATA[activeSpotIndex];

  // When spot changes, stop playback and reset timer
  const handleSelectSpot = (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setActiveSpotIndex(index);
    setCurrentTime(0);
    setDuration(SPOTS_DATA[index].durationSec);
  };

  const handleTogglePlay = () => {
    if (!activeSpot.hasAudio || !audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Audio play request interrupted or blocked:', err);
      });
    }
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current && activeSpot.hasAudio) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!activeSpot.hasAudio || !audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = ratio * (duration || activeSpot.durationSec);
    audioRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(activeSpot.script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (activeSpot.hasAudio && activeSpot.audioUrl) {
      const link = document.createElement('a');
      link.href = activeSpot.audioUrl;
      link.download = `SPOT 1 LANÇAMENTOS MARVEL.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const blob = new Blob([activeSpot.script], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Spot_0${activeSpot.id}_Roteiro_Yamaha.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="roteiros" className="py-16 sm:py-20 border-b border-white/10">
      {/* Native HTML5 Audio element bound to the local spot 1 audio file */}
      <audio
        ref={audioRef}
        src="SPOT 1 LANÇAMENTOS MARVEL.mp3"
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleAudioTimeUpdate}
        onEnded={handleAudioEnded}
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDuration(audioRef.current.duration);
          }
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#e60012] uppercase">
            02 • Roteiros Escritos & Audição
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Os 6 Textos Publicitários
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Spot 01 produzido e disponível para audição e download. Os spots 02 a 06 com roteiros completos, prontos para produção em estúdio após aprovação.
          </p>
        </div>

        {/* Spot Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {SPOTS_DATA.map((spot, idx) => {
            const isActive = idx === activeSpotIndex;
            return (
              <button
                key={spot.id}
                onClick={() => handleSelectSpot(idx)}
                className={`p-3 rounded-xl text-left transition-all border relative ${
                  isActive
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 border-white/10'
                }`}
              >
                {/* Audio Status Pill */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#e60012]' : 'text-zinc-500'}`}>
                    0{spot.id}
                  </span>
                  {spot.hasAudio ? (
                    <span className="text-[9px] font-mono font-bold bg-[#e60012] text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                      ÁUDIO
                    </span>
                  ) : (
                    <span className={`text-[9px] font-mono ${isActive ? 'text-black/60' : 'text-zinc-600'}`}>
                      {spot.durationSec}s
                    </span>
                  )}
                </div>

                <p className={`text-xs font-bold mt-1.5 truncate ${isActive ? 'text-black' : 'text-zinc-200'}`}>
                  {spot.isMaster ? 'Master 60s' : `Spot 0${spot.id}`}
                </p>

                {/* Subtitle status */}
                <span className={`text-[10px] block mt-0.5 font-mono ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  {spot.hasAudio ? 'Demonstração' : 'Roteiro'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Script & Audio Box Container */}
        <div className="bg-[#111318] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Integrated Minimalist Audio Player Header */}
          <div className="bg-[#171922] p-4 sm:p-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Play button & Info */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {activeSpot.hasAudio ? (
                <button
                  onClick={handleTogglePlay}
                  className="w-12 h-12 rounded-full bg-[#e60012] hover:bg-[#ff1a2b] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md shadow-[#e60012]/30 cursor-pointer"
                  title={isPlaying ? 'Pausar áudio' : 'Ouvir locução do Spot 01'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
              ) : (
                <div
                  className="w-12 h-12 rounded-full bg-zinc-800/60 border border-white/5 text-zinc-600 flex items-center justify-center shrink-0 cursor-not-allowed"
                  title="Áudio aguardando aprovação para produção em estúdio"
                >
                  <Play className="w-5 h-5 fill-current opacity-30 ml-0.5" />
                </div>
              )}

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    {activeSpot.title}
                  </span>
                  {activeSpot.hasAudio ? (
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Áudio Disponível
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-white/10 px-2 py-0.5 rounded">
                      Roteiro (Produção Pendente)
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {activeSpot.hasAudio
                    ? (isPlaying ? 'Reproduzindo áudio oficial de demonstração...' : 'Clique no play para ouvir o áudio produzido')
                    : 'Play desativado • Áudio será produzido após aprovação da proposta'}
                </p>
              </div>
            </div>

            {/* Right: Timer, Equalizer, Soundtrack & Download icons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Equalizer animation */}
              {activeSpot.hasAudio ? (
                <div className="flex items-end gap-1 h-5">
                  {[12, 20, 16, 24, 14, 18].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: isPlaying ? `${Math.max(4, (h * (i % 2 === 0 ? 1 : 0.7)))}px` : '4px' }}
                      className={`w-1 rounded-full transition-all duration-150 ${isPlaying ? 'bg-[#e60012] animate-pulse' : 'bg-zinc-700'}`}
                    />
                  ))}
                </div>
              ) : null}

              {/* Time display */}
              <span className="text-xs font-mono font-bold text-zinc-400">
                {formatTime(currentTime)} / {formatTime(duration || activeSpot.durationSec)}
              </span>

              {/* Mute/Unmute toggle */}
              {activeSpot.hasAudio && (
                <button
                  onClick={() => {
                    const next = !bgmEnabled;
                    setBgmEnabled(next);
                    if (audioRef.current) {
                      audioRef.current.muted = !next;
                    }
                  }}
                  className={`p-2 rounded-lg text-xs font-mono border transition-all ${
                    bgmEnabled
                      ? 'bg-white/5 border-white/15 text-zinc-200 hover:bg-white/10'
                      : 'bg-white/[0.02] border-white/5 text-zinc-600'
                  }`}
                  title={bgmEnabled ? 'Áudio ativado' : 'Áudio mudo'}
                >
                  {bgmEnabled ? <Volume2 className="w-4 h-4 text-zinc-300" /> : <VolumeX className="w-4 h-4 text-zinc-600" />}
                </button>
              )}

              {/* Download Button (Right next to volume icon) */}
              <button
                onClick={handleDownload}
                className={`p-2 rounded-lg text-xs font-mono border transition-all flex items-center gap-1 ${
                  activeSpot.hasAudio
                    ? 'bg-[#e60012]/15 hover:bg-[#e60012]/25 border-[#e60012]/30 text-red-400 active:scale-95'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-zinc-400 active:scale-95'
                }`}
                title={activeSpot.hasAudio ? 'Baixar arquivo de áudio SPOT 1 LANÇAMENTOS MARVEL.mp3' : 'Baixar texto do roteiro (.txt)'}
              >
                <Download className="w-4 h-4" />
                <span className="text-[10px] hidden sm:inline font-bold uppercase">
                  {activeSpot.hasAudio ? 'MP3' : 'TXT'}
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Progress Line */}
          <div
            onClick={handleSeek}
            className={`w-full bg-white/5 h-1.5 ${activeSpot.hasAudio ? 'cursor-pointer' : ''} relative`}
            title={activeSpot.hasAudio ? 'Clique para avançar/retroceder o áudio' : ''}
          >
            <div
              className={`h-full transition-all duration-100 ${activeSpot.hasAudio ? 'bg-[#e60012]' : 'bg-zinc-700'}`}
              style={{ width: `${Math.min(100, (currentTime / (duration || activeSpot.durationSec)) * 100)}%` }}
            />
          </div>

          {/* Screenplay Clean Text Box */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                Texto do Roteiro ({activeSpot.duration})
              </span>
              <button
                onClick={handleCopyScript}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Texto Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Texto</span>
                  </>
                )}
              </button>
            </div>

            {/* Pure Screenplay Text */}
            <div className="max-w-2xl mx-auto py-2">
              <p className="text-base sm:text-xl text-zinc-100 font-sans leading-relaxed tracking-normal selection:bg-[#e60012]">
                "{activeSpot.script}"
              </p>
            </div>

            {/* Quick Navigation between scripts */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5 text-xs text-zinc-400">
              <button
                onClick={() => handleSelectSpot(Math.max(0, activeSpotIndex - 1))}
                disabled={activeSpotIndex === 0}
                className={`font-mono ${activeSpotIndex === 0 ? 'text-zinc-600 cursor-not-allowed' : 'hover:text-white transition-colors'}`}
              >
                ← Anterior (Spot 0{activeSpotIndex})
              </button>
              <span className="font-mono text-zinc-600">
                {activeSpotIndex + 1} de {SPOTS_DATA.length}
              </span>
              <button
                onClick={() => handleSelectSpot(Math.min(SPOTS_DATA.length - 1, activeSpotIndex + 1))}
                disabled={activeSpotIndex === SPOTS_DATA.length - 1}
                className={`font-mono ${activeSpotIndex === SPOTS_DATA.length - 1 ? 'text-zinc-600 cursor-not-allowed' : 'hover:text-white transition-colors'}`}
              >
                Próximo (Spot 0{activeSpotIndex + 2}) →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
