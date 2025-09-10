import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  status: "responded" | "pending" | "closed";
  time: string;
  priority: "high" | "medium" | "low";
  assignee?: string;
}

const mockActivities: Activity[] = [
  {
    id: "JIRA-001",
    title: "Erro na autenticação do usuário",
    status: "responded",
    time: "2 min atrás",
    priority: "high",
    assignee: "João Silva"
  },
  {
    id: "JIRA-002", 
    title: "Solicitação de nova funcionalidade",
    status: "pending",
    time: "15 min atrás",
    priority: "medium"
  },
  {
    id: "JIRA-003",
    title: "Bug no sistema de pagamento",
    status: "closed",
    time: "1 hora atrás",
    priority: "high",
    assignee: "Maria Santos"
  },
  {
    id: "JIRA-004",
    title: "Melhoria na interface do usuário",
    status: "pending",
    time: "2 horas atrás",
    priority: "low"
  },
  {
    id: "JIRA-005",
    title: "Problema de performance",
    status: "responded",
    time: "3 horas atrás",
    priority: "medium",
    assignee: "Carlos Oliveira"
  }
];

export const RecentActivity = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "responded": return <CheckCircle className="h-4 w-4 text-success" />;
      case "closed": return <CheckCircle className="h-4 w-4 text-muted-foreground" />;
      default: return <AlertCircle className="h-4 w-4 text-warning" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "responded": return <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">Respondido</Badge>;
      case "closed": return <Badge variant="outline">Fechado</Badge>;
      default: return <Badge variant="secondary" className="bg-warning/10 text-warning hover:bg-warning/20">Pendente</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive";
      case "medium": return "border-l-warning";
      default: return "border-l-info";
    }
  };

  return (
    <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
            <MessageSquare className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Atividades Recentes</h3>
        </div>
        
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 rounded-lg border-l-4 ${getPriorityColor(activity.priority)} bg-card/50 hover:bg-card/80 transition-colors duration-200`}
            >
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(activity.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  {getStatusBadge(activity.status)}
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="font-mono">{activity.id}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                  {activity.assignee && (
                    <span>Atribuído para {activity.assignee}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};