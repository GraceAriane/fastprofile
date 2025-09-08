"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import { Button } from "./ui/button"
export const description = "An area chart with axes"



function getLast7DaysData() {
  const today = new Date()
  const days: { day: string; desktop: number; mobile: number }[] = []

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)

    days.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }), // ex: "Mon"
      desktop: Math.floor(Math.random() * 300) + 50, // valeurs mock
      mobile: Math.floor(Math.random() * 200) + 20,
    })
  }

  return days
}

const chartData = getLast7DaysData()

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaAxes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Activité</CardTitle>
        <CardDescription>
          vues et clics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tickCount={4}
              
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="none"
              fillOpacity={0.4}
              stroke="red"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="none"
              fillOpacity={0.4}
              stroke="blue"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="text-[16px] px-6 rounded-full border-[#919190]">
                  <span className="bg-red-500 w-[10px] h-[10px] rounded-full"></span>
                  Vues
              </Button>
              <Button variant="outline" className="text-[16px] px-6 rounded-full border-[#919190]">
                  <span className="bg-blue-500 w-[10px] h-[10px] rounded-full"></span>
                  Clics
              </Button>
            </div>
        </div>
      </CardFooter>
    </Card>
  )
}
