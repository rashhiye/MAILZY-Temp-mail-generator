import { useEffect, useState, useCallback } from "react";
import { Copy, RefreshCw, Mail, Loader2, ArrowLeft, Inbox as InboxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { createAccount, fetchMessages, fetchMessage, TempAccount, TempMessage } from "@/lib/tempmail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InboxPage = () => {
  const { toast } = useToast();
  const [account, setAccount] = useState<TempAccount | null>(null);
  const [messages, setMessages] = useState<TempMessage[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<TempMessage | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const init = useCallback(async () => {
    setLoading(true);
    try {
      const acc = await createAccount();
      setAccount(acc);
      const msgs = await fetchMessages(acc.token);
      setMessages(msgs);
    } catch {
      toast({ title: "Error", description: "Failed to create temp email. Please try again.", variant: "destructive" });
    }
    setLoading(false);
  }, [toast]);

  useEffect(() => { init(); }, [init]);

  // Auto-refresh every 5s
  useEffect(() => {
    if (!account) return;
    const interval = setInterval(async () => {
      try {
        const msgs = await fetchMessages(account.token);
        setMessages(msgs);
      } catch { /* silent */ }
    }, 5000);
    return () => clearInterval(interval);
  }, [account]);

  const handleRefresh = async () => {
    if (!account) return;
    setRefreshing(true);
    try {
      const msgs = await fetchMessages(account.token);
      setMessages(msgs);
    } catch { /* */ }
    setRefreshing(false);
  };

  const handleCopy = () => {
    if (!account) return;
    navigator.clipboard.writeText(account.address);
    toast({ title: "Copied!", description: "Email address copied to clipboard." });
  };

  const handleSelectMsg = async (msg: TempMessage) => {
    if (!account) return;
    try {
      const full = await fetchMessage(account.token, msg.id);
      setSelectedMsg(full);
    } catch {
      toast({ title: "Error", description: "Could not load message.", variant: "destructive" });
    }
  };

  const handleNewEmail = () => {
    setSelectedMsg(null);
    setMessages([]);
    init();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Generating your temporary email...</p>
          </div>
        ) : (
          <>
            {/* Email address bar */}
            <div className="mb-6 rounded-xl border border-border bg-card p-4 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="gradient-bg rounded-lg p-2 shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Your temporary email</p>
                  <p className="text-foreground font-mono font-semibold text-sm sm:text-base truncate">
                    {account?.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-1" /> Copy
                </Button>
                <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
                  <RefreshCw className={`h-4 w-4 mr-1 ${refreshing ? "animate-spin" : ""}`} /> Refresh
                </Button>
                <Button size="sm" onClick={handleNewEmail} className="gradient-bg text-primary-foreground hover:opacity-90">
                  New
                </Button>
              </div>
            </div>

            {/* Message view or list */}
            {selectedMsg ? (
              <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
                <Button variant="ghost" size="sm" onClick={() => setSelectedMsg(null)} className="mb-4 text-muted-foreground">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <h2 className="text-xl font-bold text-foreground mb-1">{selectedMsg.subject || "(No Subject)"}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  From: {selectedMsg.from.name || selectedMsg.from.address}
                  <span className="ml-2 text-xs">
                    {new Date(selectedMsg.createdAt).toLocaleString()}
                  </span>
                </p>
                <div className="border-t border-border pt-4">
                  {selectedMsg.html?.length ? (
                    <div
                      className="prose prose-sm dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedMsg.html.join("") }}
                    />
                  ) : (
                    <p className="text-foreground whitespace-pre-wrap">{selectedMsg.text || selectedMsg.intro}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <InboxIcon className="h-12 w-12 text-muted-foreground/40 mb-4" />
                    <p className="text-muted-foreground font-medium">No messages yet</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Inbox refreshes automatically every 5 seconds
                    </p>
                  </div>
                ) : (
                  <ul className="divide-y divide-border">
                    {messages.map((msg) => (
                      <li
                        key={msg.id}
                        onClick={() => handleSelectMsg(msg)}
                        className="flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <div className="rounded-full bg-primary/10 p-2 mt-0.5 shrink-0">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-foreground truncate">
                              {msg.from?.name || msg.from?.address}
                            </p>
                            <span className="text-xs text-muted-foreground shrink-0">
                              {new Date(msg.createdAt).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-foreground truncate">{msg.subject || "(No Subject)"}</p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">{msg.intro}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default InboxPage;
