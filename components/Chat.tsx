import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UIMessage } from "@ai-sdk/react";

export default function Chat({
  messages,
  isLoading,
}: {
  messages: UIMessage[];
  isLoading: boolean;
}) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start gap-4 ${
            message.role === "user" ? "justify-end" : ""
          }`}
        >
          {message.role === "assistant" && (
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
          )}
          <div
            className={`rounded-lg p-3 max-w-[75%] ${
              message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {message.parts.map((part, i) => {
              if (part.type === "text") {
                return <p key={i}>{part.text}</p>;
              }
            })}
          </div>
          {message.role === "user" && (
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
      {isLoading && (
        <div className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>TB</AvatarFallback>
          </Avatar>
          <div className="rounded-lg p-3 max-w-[75%] bg-gray-700 text-white">
            <p>Typing...</p>
          </div>
        </div>
      )}
    </div>
  );
}