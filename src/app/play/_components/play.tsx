"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Play() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(new Audio("/audio.mp3"));

    const handleTogglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="flex items-center justify-center mt-5 mb-10">Remove water from your phone</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">

                <Button onClick={handleTogglePlay} className="w-20 h-20 rounded-full text-lg mb-10 bg-blue-600 hover:bg-blue-400">
                    {isPlaying ? "Pause" : "Remove"}
                </Button>

            </CardContent>
        </Card>
    )
}
