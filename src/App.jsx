import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

const modes = [
  { id: "link", label: "Link" },
  { id: "text", label: "Text" },
];

const sampleLink = "https://example.com";
const sampleText = "Hello from your QR generator";

export default function App() {
  const [mode, setMode] = useState("link");
  const [value, setValue] = useState(sampleLink);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const placeholder = useMemo(() => {
    return mode === "link" ? sampleLink : sampleText;
  }, [mode]);

  useEffect(() => {
    let isActive = true;

    const makeQr = async () => {
      const trimmed = value.trim();
      if (!trimmed) {
        setQrDataUrl("");
        setError("");
        return;
      }

      setIsGenerating(true);
      try {
        const url = await QRCode.toDataURL(trimmed, {
          width: 640,
          margin: 2,
          color: {
            dark: "#0d1b2a",
            light: "#ffffff",
          },
        });
        if (isActive) {
          setQrDataUrl(url);
          setError("");
        }
      } catch (err) {
        if (isActive) {
          setError("Could not generate the QR code. Try different content.");
          setQrDataUrl("");
        }
      } finally {
        if (isActive) {
          setIsGenerating(false);
        }
      }
    };

    makeQr();

    return () => {
      isActive = false;
    };
  }, [value]);

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setValue(nextMode === "link" ? sampleLink : sampleText);
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `qr-${mode}.png`;
    link.click();
  };

  const handleCopy = async () => {
    if (!value.trim()) return;
    try {
      await navigator.clipboard.writeText(value.trim());
    } catch {
      // Clipboard may be unavailable without HTTPS or permissions.
    }
  };

  return (
    <div className="min-h-screen bg-cloud text-deepsea">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-tide/30 blur-3xl animate-float" />
          <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-sand/50 blur-3xl animate-pulseGlow" />
          <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-coral/30 blur-3xl animate-float" />
        </div>

        <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-14">
          <header className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] shadow">
              <span className="h-2 w-2 rounded-full bg-tide" />
              Instant QR Studio
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Generate stunning QR codes from links or text
            </h1>
            <p className="mt-4 text-lg text-deepsea/70">
              Paste a URL or write a message, then download a crisp QR in seconds.
              Built with smooth motion, fresh gradients, and a clean layout.
            </p>
          </header>

          <section className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="flex flex-wrap items-center gap-3">
                {modes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleModeChange(item.id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                      mode === item.id
                        ? "bg-deepsea text-white shadow"
                        : "bg-white text-deepsea/70 hover:text-deepsea"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <span className="ml-auto text-xs uppercase tracking-[0.2em] text-deepsea/50">
                  Live preview
                </span>
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold uppercase tracking-[0.25em] text-deepsea/60">
                  {mode === "link" ? "Paste your link" : "Write your message"}
                </label>
                <textarea
                  rows={5}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  placeholder={placeholder}
                  className="mt-3 w-full rounded-2xl border border-deepsea/10 bg-white/80 px-4 py-4 text-base text-deepsea shadow-inner outline-none transition focus:border-tide focus:ring-2 focus:ring-tide/40"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-deepsea/60">
                  <span>{value.trim().length} characters</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setValue("")}
                      className="rounded-full border border-deepsea/10 bg-white px-4 py-1.5 text-sm font-semibold text-deepsea/70 transition hover:text-deepsea"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="rounded-full bg-deepsea px-4 py-1.5 text-sm font-semibold text-white transition hover:translate-y-0.5"
                    >
                      Copy text
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-gradient-to-r from-tide/10 via-white to-coral/10 px-4 py-4">
                <div>
                  <p className="text-sm font-semibold text-deepsea">Smart hints</p>
                  <p className="text-sm text-deepsea/60">
                    Short links scan faster. Keep text concise for best results.
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-deepsea/60">
                  Auto refresh
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Your QR code</h2>
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={!qrDataUrl}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    qrDataUrl
                      ? "bg-tide text-white shadow-glow"
                      : "cursor-not-allowed bg-deepsea/10 text-deepsea/40"
                  }`}
                >
                  Download PNG
                </button>
              </div>

              <div className="mt-6 flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-deepsea/20 bg-white/70 p-6">
                {qrDataUrl ? (
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={qrDataUrl}
                      alt="Generated QR code"
                      className="h-64 w-64 rounded-3xl bg-white p-4 shadow-xl"
                    />
                    <span className="rounded-full bg-deepsea px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Ready to scan
                    </span>
                  </div>
                ) : (
                  <div className="text-center text-deepsea/50">
                    <p className="text-lg font-semibold">Waiting for input</p>
                    <p className="mt-2 text-sm">
                      Paste a link or write a message to see your QR code.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-deepsea/60">
                <span>
                  {isGenerating
                    ? "Generating..."
                    : "High resolution PNG output"}
                </span>
                {error ? (
                  <span className="text-coral">{error}</span>
                ) : (
                  <span>Instant refresh</span>
                )}
              </div>
            </div>
          </section>

          <footer className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-deepsea/50">
            Developed by Umar
          </footer>
        </main>
      </div>
    </div>
  );
}
