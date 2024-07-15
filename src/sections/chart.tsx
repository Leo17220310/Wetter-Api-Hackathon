import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartProps {
  data: { city: string; temperature: number }[];
}

const chartConfig = {
  city: {
    label: "City",
    color: "hsl(var(--chart-1))",
  },
};

export function Chart({ data }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperatur Diagramm / Analyse</CardTitle>
        <CardDescription>
          Aktuelle Temperatur für die ausgewählten Städte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="city"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="temperature" fill="var(--color-city)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-gray-400">
          Zeigt die aktuelle Temperatur für die ausgewählten Städte an, die sie analysieren wollen.
        </div>
      </CardFooter>
    </Card>
  );
}

export default Chart;
