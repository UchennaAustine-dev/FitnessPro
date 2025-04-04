"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, MessageSquare, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
  replies: Comment[];
}

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  // In a real app, this would fetch from a database
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This HIIT routine is amazing! I've been doing it for 2 weeks and already seeing results. The timer feature really helps keep me on track.",
      date: "2 days ago",
      likes: 24,
      isLiked: false,
      replies: [
        {
          id: "1-1",
          author: {
            name: "Mike Peterson",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "How many times per week are you doing this routine? I'm thinking of incorporating it into my schedule.",
          date: "1 day ago",
          likes: 5,
          isLiked: false,
          replies: [],
        },
        {
          id: "1-2",
          author: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "I'm doing it 3 times a week with rest days in between. It's intense but totally worth it!",
          date: "1 day ago",
          likes: 3,
          isLiked: false,
          replies: [],
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "David Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Great article! I've been struggling with my form on squats, and the tips here really helped me correct my technique. My knees thank you!",
      date: "3 days ago",
      likes: 17,
      isLiked: false,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleLike = (
    commentId: string,
    isReply = false,
    parentId?: string
  ) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        } else if (isReply && parentId) {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                    isLiked: !reply.isLiked,
                  };
                }
                return reply;
              }),
            };
          }
        }
        return comment;
      });
    });
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `new-${Date.now()}`,
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: newComment,
      date: "Just now",
      likes: 0,
      isLiked: false,
      replies: [],
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
  };

  const handleAddReply = (commentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: `reply-${Date.now()}`,
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: replyContent,
      date: "Just now",
      likes: 0,
      isLiked: false,
      replies: [],
    };

    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        }
        return comment;
      });
    });

    setReplyingTo(null);
    setReplyContent("");
  };

  const handleReport = (commentId: string) => {
    // In a real app, this would send a report to the backend
    alert("Comment reported. Our team will review it shortly.");
  };

  return (
    <div className="space-y-8">
      <h3 className="font-heading text-2xl font-bold">
        Comments ({comments.length})
      </h3>

      <div className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button onClick={handleAddComment}>Post Comment</Button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage
                    src={comment.author.avatar}
                    alt={comment.author.name}
                  />
                  <AvatarFallback>
                    {comment.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{comment.author.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {comment.date}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleReport(comment.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>

                  <div className="mt-2">
                    <p>{comment.content}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(comment.id)}
                      className={cn(
                        "flex items-center gap-1 text-muted-foreground",
                        comment.isLiked && "text-primary"
                      )}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{comment.likes}</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setReplyingTo(
                          replyingTo === comment.id ? null : comment.id
                        )
                      }
                      className="flex items-center gap-1 text-muted-foreground"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {replyingTo === comment.id && (
              <div className="ml-12 space-y-4">
                <Textarea
                  placeholder={`Reply to ${comment.author.name}...`}
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </Button>
                  <Button onClick={() => handleAddReply(comment.id)}>
                    Reply
                  </Button>
                </div>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          src={reply.author.avatar}
                          alt={reply.author.name}
                        />
                        <AvatarFallback>
                          {reply.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{reply.author.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {reply.date}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleReport(reply.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Flag className="h-4 w-4" />
                            <span className="sr-only">Report</span>
                          </Button>
                        </div>

                        <div className="mt-2">
                          <p>{reply.content}</p>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleLike(reply.id, true, comment.id)
                            }
                            className={cn(
                              "flex items-center gap-1 text-muted-foreground",
                              reply.isLiked && "text-primary"
                            )}
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>{reply.likes}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
