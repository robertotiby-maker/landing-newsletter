import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Mail, TrendingUp, Users, Calendar, Clock, MonitorPlay, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_agent.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-12 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <img src="/images/logo_final.png" alt="Newsletter Pro AI Logo" className="h-80 md:h-96 w-auto drop-shadow-lg" />
            </div>
            <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2 py-0.5 text-xs text-primary-foreground/80 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
              Nuova Edizione - Febbraio 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Trasforma i tuoi contatti in <span className="text-accent">Nuove Acquisizioni</span> con il metodo Newsletter AI
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              La stragrande maggioranza degli agenti immobiliari sostiene che il 90% delle acquisizioni deriva dal passaparola. La newsletter è il modo più efficiente ed efficace per alimentare questo passaparola.
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Hai una miniera d'Oro di contatti. <br/>La stai sfruttando? Sai che puoi farlo gratis??!!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ogni giorno raccogli decine di contatti: potenziali acquirenti, venditori, o semplici curiosi. Questi dati sono una risorsa inestimabile, ma la maggior parte degli agenti li lascia inutilizzati in un cassetto digitale.
              </p>
              <div className="bg-destructive/20 border-l-4 border-destructive p-4 rounded-r-lg">
                <p className="font-bold text-black">
                  Il risultato? Opportunità di business perse e una dipendenza costante dal passaparola, che non è scalabile.
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La soluzione è più semplice di quanto pensi: <strong>newsletter automatizzate e intelligenti</strong>. Impara a trasformare la tua lista in un flusso costante di nuovi clienti, senza spendere una fortuna.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-xl blur-xl"></div>
              <img 
                src="/images/growth_success.png" 
                alt="Crescita business immobiliare" 
                className="relative rounded-xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cosa Imparerai in 3 Lezioni Pratiche
            </h2>
            <p className="text-lg text-muted-foreground">
              Un percorso completo, dalla teoria alla pratica, per renderti autonomo in meno di una settimana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lesson 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Lezione 1: Dalla A alla Z</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Organizzare i contatti con l'aiuto dell'AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Scegliere la piattaforma AI-driven gratuita</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Creare un template professionale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lesson 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                AI POWERED
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MonitorPlay className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Lezione 2: Copywriting con AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Scrivere testi persuasivi con l'AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Creare contenuti di valore per i clienti</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Segreti per un oggetto irresistibile</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lesson 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Lezione 3: Automatizza e Misura</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Programmare l'invio strategico con l'AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Analisi predittiva dei dati con l'AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Convertire lettori in appuntamenti</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Formato Intensivo</h3>
                <p className="text-muted-foreground">3 lezioni live da 2 ore (6 ore totali)</p>
              </div>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-border"></div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Interazione Diretta</h3>
                <p className="text-muted-foreground">Q&A live + Registrazioni incluse</p>
              </div>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-border"></div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Inizio Corso</h3>
                <p className="text-muted-foreground">Febbraio 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Cosa Dicono i Tuoi Colleghi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-secondary/20 border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground mb-6">
                  "Pensavo che le newsletter fossero una perdita di tempo. Dopo questo corso, ho acquisito 3 nuovi clienti in un mese. Incredibile!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">MR</div>
                  <div>
                    <p className="font-bold text-primary">Marco R.</p>
                    <p className="text-sm text-muted-foreground">Agente Immobiliare, Milano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground mb-6">
                  "Finalmente un corso pratico. Ho impostato tutto durante le lezioni e la mia prima newsletter ha avuto un tasso di apertura del 45%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">LS</div>
                  <div>
                    <p className="font-bold text-primary">Laura S.</p>
                    <p className="text-sm text-muted-foreground">Consulente Immobiliare, Roma</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investi nel Tuo Futuro Professionale
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12">
              Un piccolo investimento per un sistema che lavorerà per te per sempre.
            </p>
            
            <Card className="bg-background text-foreground border-none shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-4 py-1 rounded-bl-lg font-bold">
                -50% SCONTO
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-primary mb-2">Newsletter Pro AI</h3>
                    <p className="text-muted-foreground">Accesso completo al corso live + bonus</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-muted-foreground line-through decoration-destructive decoration-2">397€ + IVA</p>
                    <p className="text-4xl md:text-5xl font-bold text-primary">197€ <span className="text-lg font-normal text-muted-foreground">+ IVA</span></p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-border mb-8"></div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Accesso completo alle 3 lezioni live</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Materiali del corso inclusi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Template pronti all'uso</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Supporto Q&A diretto</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Strategie AI avanzate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3" />
                      <span>Garanzia Soddisfatti o Rimborsati</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-8 h-auto shadow-lg shadow-accent/20 transition-all hover:scale-105"
                  onClick={() => window.location.href = 'https://buy.stripe.com/dRm28s4mR9nbg0r56a4800e'}
                >
                  VOGLIO ISCRIVERMI ORA
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  *Offerta valida solo per i primi 30 iscritti
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Domande Frequenti
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Serve esperienza tecnica per seguire il corso?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Assolutamente no. Il corso è pensato per partire da zero. Ti guideremo passo dopo passo nella configurazione degli strumenti, senza tecnicismi inutili.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Gli strumenti consigliati sono davvero gratuiti?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sì, ti mostreremo come utilizzare piattaforme professionali che offrono piani gratuiti robusti, perfetti per iniziare e scalare la tua attività senza costi fissi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Riceverò i materiali del corso?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sì, riceverai slide, checklist e guide pratiche in un'area riservata, così potrai consultarle quando vuoi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/images/logo_final.png" alt="Logo" className="h-16 w-auto" />
            <span className="text-xl font-bold">Newsletter Pro AI</span>
          </div>
          <p className="text-primary-foreground/60 mb-8">
            &copy; 2026 Newsletter Pro AI. Tutti i diritti riservati.
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini e Condizioni</a>
            <a href="#" className="hover:text-white transition-colors">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
