import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { ComponentPreview } from "@/components/ui/component-preview";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border-2 border-black p-3 shadow-brutal-sm font-body">
        <p className="font-bold mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            style={{ color: entry.color }}
            className="text-sm font-bold"
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ChartDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Charts
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Beautiful and responsive charts built with Recharts, customized for
          the Neo-Brutalism aesthetic.
        </p>
      </div>

      <ComponentPreview
        title="Bar Chart"
        description="A brutalist bar chart with solid colors and thick borders."
        code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";\n\nconst data = [\n  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },\n  // ...\n]\n\nexport function BarChartDemo() {\n  return (\n    <ResponsiveContainer width="100%" height={350}>\n      <BarChart data={data}>\n        <CartesianGrid strokeDasharray="3 3" stroke="#000000" vertical={false} />\n        <XAxis dataKey="name" stroke="#000000" tick={{fontFamily: 'IBM Plex Mono', fontWeight: 'bold'}} />\n        <YAxis stroke="#000000" tick={{fontFamily: 'IBM Plex Mono'}} />\n        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(0,0,0,0.1)'}} />\n        <Bar dataKey="uv" fill="var(--color-primary)" stroke="#000000" strokeWidth={2} radius={[4, 4, 0, 0]} />\n        <Bar dataKey="pv" fill="var(--color-secondary)" stroke="#000000" strokeWidth={2} radius={[4, 4, 0, 0]} />\n      </BarChart>\n    </ResponsiveContainer>\n  )\n}`}
      >
        <div className="w-full h-[350px] p-4 bg-muted border-2 border-black rounded-xl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#000000"
                vertical={false}
                opacity={0.3}
              />
              <XAxis
                dataKey="name"
                stroke="#000000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <YAxis
                stroke="#000000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0,0,0,0.1)" }}
              />
              <Bar
                dataKey="uv"
                fill="var(--color-primary)"
                stroke="#000000"
                strokeWidth={2}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="pv"
                fill="var(--color-secondary)"
                stroke="#000000"
                strokeWidth={2}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Line Chart"
        description="Line chart with solid stroke and sharp custom dots."
        code={`import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";\n\nexport function LineChartDemo() {\n  return (\n    <ResponsiveContainer width="100%" height={350}>\n      <LineChart data={data}>\n        <CartesianGrid strokeDasharray="3 3" stroke="#000" vertical={false} opacity={0.3} />\n        <XAxis dataKey="name" stroke="#000" tick={{fontFamily: 'IBM Plex Mono', fontWeight: 'bold'}} />\n        <YAxis stroke="#000" tick={{fontFamily: 'IBM Plex Mono', fontWeight: 'bold'}} />\n        <Tooltip content={<CustomTooltip />} />\n        <Line type="monotone" dataKey="uv" stroke="var(--color-accent)" strokeWidth={4} activeDot={{ r: 8, stroke: '#000', strokeWidth: 2 }} dot={{ r: 4, stroke: '#000', strokeWidth: 2, fill: '#fff'}} />\n      </LineChart>\n    </ResponsiveContainer>\n  )\n}`}
      >
        <div className="w-full h-[350px] p-4 bg-muted border-2 border-black rounded-xl">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#000"
                vertical={false}
                opacity={0.3}
              />
              <XAxis
                dataKey="name"
                stroke="#000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <YAxis
                stroke="#000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="var(--color-accent)"
                strokeWidth={4}
                activeDot={{ r: 8, stroke: "#000", strokeWidth: 2 }}
                dot={{ r: 4, stroke: "#000", strokeWidth: 2, fill: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Area Chart"
        description="Area chart for visual mass, great for volume tracking."
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";\n\nexport function AreaChartDemo() {\n  return (\n    <ResponsiveContainer width="100%" height={350}>\n      <AreaChart data={data}>\n        <CartesianGrid strokeDasharray="3 3" stroke="#000" vertical={false} opacity={0.3} />\n        <XAxis dataKey="name" stroke="#000" tick={{fontFamily: 'IBM Plex Mono', fontWeight: 'bold'}} />\n        <YAxis stroke="#000" tick={{fontFamily: 'IBM Plex Mono', fontWeight: 'bold'}} />\n        <Tooltip content={<CustomTooltip />} />\n        <Area type="step" dataKey="uv" stroke="#000" strokeWidth={2} fill="var(--color-primary)" />\n      </AreaChart>\n    </ResponsiveContainer>\n  )\n}`}
      >
        <div className="w-full h-[350px] p-4 bg-muted border-2 border-black rounded-xl">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#000"
                vertical={false}
                opacity={0.3}
              />
              <XAxis
                dataKey="name"
                stroke="#000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <YAxis
                stroke="#000"
                tick={{ fontFamily: "IBM Plex Mono", fontWeight: "bold" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="step"
                dataKey="uv"
                stroke="#000"
                strokeWidth={2}
                fill="var(--color-primary)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>
    </div>
  );
}
