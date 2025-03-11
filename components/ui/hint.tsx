import { TooltipContent } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./tooltip";


export interface HintProps {
    label: String;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}
    : HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-white bg-black/75 border-black/75 rounded-sm p-2"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
                

            </Tooltip>

        </TooltipProvider>
    );
};

