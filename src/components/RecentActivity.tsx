import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, CheckCircle, AlertCircle, User, Phone } from "lucide-react";

interface Activity {
  id: string;
  customerName: string;
  customerPhone: string;
  messagePreview: string;
  status: "responded" | "pending" | "no_response";
  time: string;
  priority: "high" | "medium" | "low";
  assignedAgent?: string;
  responseTime?: string;
}

const mockActivities: Activity[] = [
  {
    id: "WA-001",
    customerName: "Maria Silva",
    customerPhone: "+55 11 99999-8888",
    messagePreview: "Olá, gostaria de saber sobre o status do meu pedido #12345...",
    status: "responded",
    time: "2 min atrás",
    priority: "high",
    assignedAgent: "João Santos",
    responseTime: "1m 30s"
  },
  {
    id: "WA-002", 
    customerName: "Carlos Oliveira",
    customerPhone: "+55 11 98888-7777",
    messagePreview: "Bom dia! Preciso de suporte técnico para o produto que comprei...",
    status: "pending",
    time: "8 min atrás",
    priority: "medium"
  },
  {
    id: "WA-003",
    customerName: "Ana Costa",
    customerPhone: "+55 21 97777-6666",
    messagePreview: "Oi, quero cancelar minha compra feita ontem. É possível?",
    status: "no_response",
    time: "25 min atrás",
    priority: "high"
  },
  {
    id: "WA-004",
    customerName: "Pedro Lima",
    customerPhone: "+55 11 96666-5555",
    messagePreview: "Obrigado pelo atendimento! Ficou perfeito.",
    status: "responded",
    time: "1 hora atrás",
    priority: "low",
    assignedAgent: "Maria Fernanda",
    responseTime: "45s"
  },
  {
    id: "WA-005",
    customerName: "Lucia Santos",
    customerPhone: "+55 85 95555-4444",
    messagePreview: "Vocês têm esse produto em outras cores?",
    status: "pending",
    time: "2 horas atrás",
    priority: "medium"
  }
];

export const RecentActivity = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "responded": return <CheckCircle className="h-4 w-4 text-whatsapp" />;
      case "no_response": return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <Clock className="h-4 w-4 text-warning" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "responded": return <Badge variant="secondary" className="bg-whatsapp/10 text-whatsapp hover:bg-whatsapp/20">Respondido</Badge>;
      case "no_response": return <Badge variant="secondary" className="bg-destructive/10 text-destructive hover:bg-destructive/20">Sem Resposta</Badge>;
      default: return <Badge variant="secondary" className="bg-warning/10 text-warning hover:bg-warning/20">Pendente</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive bg-destructive/5";
      case "medium": return "border-l-warning bg-warning/5";
      default: return "border-l-info bg-info/5";
    }
  };

  return (
    <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-whatsapp rounded-lg shadow-lg">
              <MessageSquare className="h-5 w-5 text-whatsapp-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Mensagens Recentes</h3>
              <p className="text-sm text-muted-foreground">Últimas interações no WhatsApp</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            Tempo Real
          </Badge>
        </div>
        
        <div className="space-y-3">
          {mockActivities.map((activity) => (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 rounded-xl border-l-4 ${getPriorityColor(activity.priority)} hover:bg-card/60 transition-all duration-200 group`}
            >
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(activity.status)}
              </div>
              
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">{activity.customerName}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span className="font-mono">{activity.customerPhone}</span>
                    </div>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                  "{activity.messagePreview}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="font-mono bg-secondary/50 px-2 py-1 rounded text-xs">{activity.id}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
                    </div>
                    {activity.responseTime && (
                      <span className="text-whatsapp font-medium">
                        Respondido em {activity.responseTime}
                      </span>
                    )}
                  </div>
                  {activity.assignedAgent && (
                    <span className="text-xs text-muted-foreground">
                      Atendente: <span className="text-foreground font-medium">{activity.assignedAgent}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-center">
            <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              Ver todas as mensagens →
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};