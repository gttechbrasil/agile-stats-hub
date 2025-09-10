import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, MessageCircle, Clock } from "lucide-react";

const hourlyData = [
  { hour: "08h", enviadas: 25, respondidas: 22, nao_respondidas: 3 },
  { hour: "09h", enviadas: 42, respondidas: 38, nao_respondidas: 4 },
  { hour: "10h", enviadas: 38, respondidas: 32, nao_respondidas: 6 },
  { hour: "11h", enviadas: 51, respondidas: 45, nao_respondidas: 6 },
  { hour: "12h", enviadas: 29, respondidas: 25, nao_respondidas: 4 },
  { hour: "13h", enviadas: 23, respondidas: 20, nao_respondidas: 3 },
  { hour: "14h", enviadas: 47, respondidas: 41, nao_respondidas: 6 },
  { hour: "15h", enviadas: 55, respondidas: 48, nao_respondidas: 7 },
  { hour: "16h", enviadas: 48, respondidas: 43, nao_respondidas: 5 },
  { hour: "17h", enviadas: 35, respondidas: 31, nao_respondidas: 4 },
  { hour: "18h", enviadas: 28, respondidas: 25, nao_respondidas: 3 },
];

const statusData = [
  { name: "Respondidas", value: 1847, color: "hsl(var(--whatsapp))" },
  { name: "Pendentes", value: 234, color: "hsl(var(--warning))" },
  { name: "Sem Resposta", value: 89, color: "hsl(var(--destructive))" },
];

const responseTimeData = [
  { day: "Dom", tempo_medio: 2.1 },
  { day: "Seg", tempo_medio: 1.8 },
  { day: "Ter", tempo_medio: 1.5 },
  { day: "Qua", tempo_medio: 1.9 },
  { day: "Qui", tempo_medio: 2.2 },
  { day: "Sex", tempo_medio: 2.8 },
  { day: "Sáb", tempo_medio: 3.1 },
];

const weeklyTrendData = [
  { week: "Sem 1", mensagens: 1245, satisfacao: 94 },
  { week: "Sem 2", mensagens: 1389, satisfacao: 96 },
  { week: "Sem 3", mensagens: 1156, satisfacao: 92 },
  { week: "Sem 4", mensagens: 1523, satisfacao: 97 },
  { week: "Sem 5", mensagens: 1678, satisfacao: 95 },
  { week: "Sem 6", mensagens: 1834, satisfacao: 98 },
];

export const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Hourly Messages Chart */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-whatsapp rounded-lg shadow-lg">
                <MessageCircle className="h-5 w-5 text-whatsapp-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Mensagens por Hora</h3>
                <p className="text-sm text-muted-foreground">Distribuição ao longo do dia</p>
              </div>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hourlyData}>
                <defs>
                  <linearGradient id="colorEnviadas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRespondidas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--whatsapp))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--whatsapp))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="hour" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--foreground))",
                    boxShadow: "0 10px 30px -10px hsl(var(--foreground) / 0.1)"
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="enviadas" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorEnviadas)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="respondidas" 
                  stroke="hsl(var(--whatsapp))" 
                  fillOpacity={1} 
                  fill="url(#colorRespondidas)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Status Distribution */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Status das Mensagens</h3>
                <p className="text-sm text-muted-foreground">Distribuição atual</p>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--foreground))"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 space-y-3">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full shadow-sm" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-foreground">{item.value.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground ml-2">mensagens</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Response Time Chart */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-info rounded-lg shadow-lg">
              <Clock className="h-5 w-5 text-info-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Tempo de Resposta</h3>
              <p className="text-sm text-muted-foreground">Média por dia da semana (minutos)</p>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  label={{ value: 'Min', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--foreground))"
                  }}
                  formatter={(value) => [`${value} min`, 'Tempo Médio']}
                />
                <Line 
                  type="monotone" 
                  dataKey="tempo_medio" 
                  stroke="hsl(var(--info))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--info))", strokeWidth: 3, r: 6 }}
                  activeDot={{ r: 8, stroke: "hsl(var(--info))", strokeWidth: 3, fill: "hsl(var(--card))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Weekly Trend */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Tendência Semanal</h3>
              <p className="text-sm text-muted-foreground">Volume e satisfação</p>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="week" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Bar yAxisId="left" dataKey="mensagens" fill="hsl(var(--primary))" radius={6} />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="satisfacao" 
                  stroke="hsl(var(--whatsapp))" 
                  strokeWidth={3}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
};