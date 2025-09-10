import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, PieChart as PieChartIcon } from "lucide-react";

const weeklyData = [
  { name: "Seg", enviadas: 12, respondidas: 8, pendentes: 4 },
  { name: "Ter", enviadas: 19, respondidas: 15, pendentes: 4 },
  { name: "Qua", enviadas: 15, respondidas: 12, pendentes: 3 },
  { name: "Qui", enviadas: 22, respondidas: 18, pendentes: 4 },
  { name: "Sex", enviadas: 28, respondidas: 24, pendentes: 4 },
  { name: "Sáb", enviadas: 8, respondidas: 6, pendentes: 2 },
  { name: "Dom", enviadas: 5, respondidas: 4, pendentes: 1 },
];

const statusData = [
  { name: "Respondidas", value: 287, color: "hsl(var(--success))" },
  { name: "Pendentes", value: 45, color: "hsl(var(--warning))" },
  { name: "Fechadas", value: 189, color: "hsl(var(--muted-foreground))" },
];

const trendData = [
  { month: "Jan", tickets: 245 },
  { month: "Fev", tickets: 298 },
  { month: "Mar", tickets: 356 },
  { month: "Abr", tickets: 289 },
  { month: "Mai", tickets: 431 },
  { month: "Jun", tickets: 521 },
];

export const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Activity Chart */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Atividade Semanal</h3>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
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
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Bar dataKey="enviadas" fill="hsl(var(--primary))" radius={4} />
                <Bar dataKey="respondidas" fill="hsl(var(--success))" radius={4} />
                <Bar dataKey="pendentes" fill="hsl(var(--warning))" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Status Distribution */}
      <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
              <PieChartIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Status dos Tickets</h3>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 space-y-2">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Trend Line Chart */}
      <Card className="lg:col-span-2 bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Tendência Mensal</h3>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
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
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
};