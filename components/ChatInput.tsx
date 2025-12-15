import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  loading,
}: {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}) {
  return (
    <div className="px-4 py-3 bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2"
        aria-disabled={loading}
      >
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 bg-gray-800 border-none focus:ring-0"
          disabled={loading}
        />
        <Button type="submit" size="icon" disabled={loading}>
          <SendIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}