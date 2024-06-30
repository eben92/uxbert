import { UserPlus2, UserRoundIcon, X } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function ActivityBar() {
  return (
    <div className=" flex flex-col justify-between  gap-4 bg-black h-full">
      <div className="px-4 py-6 space-y-8">
        <div className="flex items-center justify-between">
          <Label className="text-lg font-semibold">Friend Activity</Label>

          <div className="flex items-center ">
            <Button className="" variant={"ghost"} size={"round"}>
              <UserPlus2 size={18} />
            </Button>

            <Button className="" variant={"ghost"} size={"round"}>
              <X size={18} />
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <p className="text-muted-foreground">
            Let friends and followers on Spotify see what you’re listening to.
          </p>

          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="relative">
                  <span className="h-3 w-3 bg-[#4077CA] rounded-full absolute top-1 z-20 right-0" />
                  <Avatar className="h-14 w-14 ">
                    <AvatarFallback className="text-muted-foreground">
                      <svg
                        width="26"
                        height="28"
                        viewBox="0 0 26 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4198 13.2808C16.6922 14.2174 16.4014 15.4723 16.4983 16.5997C16.5947 17.7217 17.1101 18.9892 18.3222 19.6517L23.9191 22.7108C24.0698 22.8492 24.2812 23.1047 24.4666 23.4254C24.5673 23.5994 24.644 23.7653 24.6932 23.9064C24.7174 23.9761 24.7325 24.0327 24.7411 24.0757C24.7493 24.1162 24.7499 24.1362 24.75 24.1379C24.75 24.138 24.75 24.138 24.75 24.1379V26.75H1.25V24.1379C1.25 24.138 1.25 24.138 1.25001 24.1379C1.25006 24.1362 1.25075 24.1162 1.25888 24.0757C1.2675 24.0327 1.28258 23.9761 1.30682 23.9064C1.35596 23.7653 1.43274 23.5994 1.53335 23.4254C1.71875 23.1047 1.93016 22.8492 2.08086 22.7108L7.67777 19.6517C8.88988 18.9892 9.4053 17.7217 9.5017 16.5997C9.59855 15.4723 9.30781 14.2174 8.58022 13.2808C7.18447 11.484 6.25 9.25437 6.25 7.72414C6.25 4.18955 9.23037 1.25 13 1.25C16.7696 1.25 19.75 4.18955 19.75 7.72414C19.75 9.25437 18.8155 11.484 17.4198 13.2808Z"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton className="w-[100px] h-[8px] " />
                  <Skeleton className="w-[60px] h-[8px] " />
                  <Skeleton className="w-[20px] h-[8px] " />
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            Go to Settings &gt; Social and enable “Share my listening activity
            on Spotify.’ You can turn this off at any time.
          </p>

          <div className="grid justify-center">
            <Button
              variant={"default"}
              className="text-base w-[200px] font-semibold rounded-3xl"
            >
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
