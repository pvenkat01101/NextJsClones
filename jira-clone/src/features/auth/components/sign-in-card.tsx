
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";


export  const SignInCard: () => React.ReactNode = () =>  {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none max-w-md">
            <CardHeader className="flex items-center justify-center items-center p-7">
                <CardTitle className="text-2xl">Welcome</CardTitle>
            </CardHeader>

            <div className="px-7">

                <DottedSeparator />
            </div>
        </Card>
    );
}