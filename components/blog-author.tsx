import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogAuthorProps {
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
}

export function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <div className="flex items-center gap-3 my-6">
      <Avatar>
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">{author.name}</div>
        {author.role && (
          <div className="text-sm text-muted-foreground">{author.role}</div>
        )}
      </div>
    </div>
  );
}
