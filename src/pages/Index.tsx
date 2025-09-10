import { MetricCard } from "@/components/MetricCard";
import { RecentActivity } from "@/components/RecentActivity";
import { ChartSection } from "@/components/ChartSection";
import { Ticket, CheckCircle2, Clock, TrendingUp, Users, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                JIRA Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Acompanhe as estatísticas e atividades do seu projeto
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Última atualização</p>
                <p className="text-sm font-medium text-foreground">Agora mesmo</p>
              </div>
              <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-glow" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <MetricCard
            title="Total Enviadas"
            value="521"
            change="+12%"
            changeType="positive"
            icon={Ticket}
            description="Este mês"
          />
          
          <MetricCard
            title="Respondidas"
            value="287"
            change="+8%"
            changeType="positive"
            icon={CheckCircle2}
            description="55% do total"
          />
          
          <MetricCard
            title="Não Respondidas"
            value="45"
            change="-3%"
            changeType="negative"
            icon={Clock}
            description="9% do total"
          />
          
          <MetricCard
            title="Fechadas"
            value="189"
            change="+15%"
            changeType="positive"
            icon={AlertTriangle}
            description="36% do total"
          />
          
          <MetricCard
            title="Tempo Médio"
            value="2.4h"
            change="-0.5h"
            changeType="positive"
            icon={TrendingUp}
            description="Resposta"
          />
          
          <MetricCard
            title="Usuários Ativos"
            value="24"
            change="+2"
            changeType="positive"
            icon={Users}
            description="Esta semana"
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
