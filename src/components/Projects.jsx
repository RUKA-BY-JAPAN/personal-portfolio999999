import Image from "next/image"
import { Code, ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ProjectCard } from "./ProjectCards"
import { RainbowButton } from "./magicui/rainbow-button"

export default function Projects() {
    return (
        <div className="min-h-screen px-12 md:px-0 bg-black text-white p-4 md:p-8 lg:p-16" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-purple-500 mb-2 text-lg">My work</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                    Projects
                </h1>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <ProjectCard title="Dakseva" description="Selected for SIH 2024 Finals & scored 2nd best project. Used ResNet-50 for real time queue analysis on 8 parameters. Built over NextJs, ExpressJs & Flask." image="/dakseva.png" githubUrl="https://github.com/DevyManish/DakVision-SIH24/" url="https://dakseva.vercel.app/" />
                    <ProjectCard title="Omeet" description="Developed oMeet, an AI-powered video conferencing app using React Native, ExpressJS, WebSockets, and MongoDB to store participant data and enable seamless communication." image="/omeet.png"
                        githubUrl="https://github.com/DevyManish/omeet-client/" url="https://github.com/DevyManish/omeet-client/releases/tag/v1.0.0" />
                    <ProjectCard title="Linear Regression Visualizer" description="Built with Next.js & ReCharts for linear regression. Accepts CSV or table input, plots graph, finds equation, correlation, and predicts y from x." image="/visualizer.png"
                        githubUrl="https://github.com/DevyManish/Linear-Regression-Visualizer" url="https://linear-regression-visualizer.vercel.app/" />
                    <ProjectCard title="FreeChat" description="A group messaging app built with React, Firebase Firestore, and Tailwind CSS for simple and fast communication and clean responsive design." image="/freechat.png"
                        githubUrl="https://github.com/DevyManish/FreeChat" url="https://freechatx.vercel.app/" />
                </div>

                <div className="flex justify-center w-full items-center py-8">
                    <Link
                        href="https://www.github.com/devymanish">
                        {/* <ShinyText /> */}
                        <RainbowButton><div className="flex gap-2 items-center text-black font-semibold">View More on {' '} <Github className="w-5 h-5" color="#020500" /></div></RainbowButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
