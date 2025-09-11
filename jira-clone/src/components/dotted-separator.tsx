import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: 'horizontal' | 'vertical';
}

export const DottedSeparator: ( props: DottedSeparatorProps ) => React.ReactNode = ({
    className,
    color = "bg-gray-200",
    height = "h-[1px]",
    dotSize = "2px",
    gapSize = "6px",
    direction = "horizontal",
}: DottedSeparatorProps) => {

const isHorizontal = direction === "horizontal";

const separatorClassName = cn(
    isHorizontal ? "w-full flex items-center justify-center" 
    : "h-full flex items-center justify-center",
    className
);
    return (
        <div className={separatorClassName} >
            <div className={isHorizontal ? "flex-grow"  : "flex-grow-0"}  
               style={{
                height: isHorizontal ? height : "100%",
                width: isHorizontal ? "100%" : height,
                backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                backgroundSize: isHorizontal ? `${parseInt(gapSize) + parseInt(dotSize)}px ${height}` : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
                backgroundPosition: "center",
                backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
               }}
            />
            </div>

    );
};