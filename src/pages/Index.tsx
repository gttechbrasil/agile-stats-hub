import { MetricCard } from "@/components/MetricCard";
import { RecentActivity } from "@/components/RecentActivity";
import { ChartSection } from "@/components/ChartSection";
import { MessageSquare, CheckCircle2, Clock, AlertTriangle, Timer, Users, TrendingUp, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-card backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-whatsapp rounded-xl shadow-lg">
                <MessageSquare className="h-8 w-8 text-whatsapp-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  WhatsApp Analytics
                </h1>
                <p className="text-muted-foreground mt-1">
                  Dashboard profissional de mensagens e atendimento
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Última sincronização</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-foreground">Agora mesmo</p>
                </div>
              </div>
              
              <div className="h-12 w-px bg-border/50" />
              
              <div className="flex items-center space-x-2 bg-whatsapp/10 px-4 py-2 rounded-lg">
                <Zap className="h-4 w-4 text-whatsapp" />
                <span className="text-sm font-medium text-whatsapp">Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          <div className="xl:col-span-2">
            <MetricCard
              title="Mensagens Enviadas"
              value="2.847"
              change="+18%"
              changeType="positive"
              icon={MessageSquare}
              description="Últimos 30 dias"
            />
          </div>
          
          <div className="xl:col-span-2">
            <MetricCard
              title="Respondidas"
              value="1.847"
              change="+12%"
              changeType="positive"
              icon={CheckCircle2}
              description="64.9% do total"
            />
          </div>
          
          <div className="xl:col-span-2">
            <MetricCard
              title="Não Respondidas"
              value="234"
              change="-8%"
              changeType="positive"
              icon={Clock}
              description="8.2% do total"
            />
          </div>
          
          <div className="xl:col-span-2">
            <MetricCard
              title="Sem Resposta"
              value="89"
              change="+3%"
              changeType="negative"
              icon={AlertTriangle}
              description="3.1% do total"
            />
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Tempo Médio de Resposta"
            value="2.3min"
            change="-0.8min"
            changeType="positive"
            icon={Timer}
            description="38% mais rápido"
          />
          
          <MetricCard
            title="Satisfação do Cliente"
            value="96.8%"
            change="+2.1%"
            changeType="positive"
            icon={TrendingUp}
            description="Avaliação média"
          />
          
          <MetricCard
            title="Agentes Ativos"
            value="12"
            change="+2"
            changeType="positive"
            icon={Users}
            description="Online agora"
          />
          
          <MetricCard
            title="Taxa de Conversão"
            value="87.4%"
            change="+4.2%"
            changeType="positive"
            icon={CheckCircle2}
            description="Mensagens → Vendas"
          />
        </section>

        {/* Charts Section */}
        <section>
          <ChartSection />
        </section>

        {/* Recent Activity */}
        <section>
          <RecentActivity />
        </section>
      </main>
    </div>
  );
};

export default Index;
