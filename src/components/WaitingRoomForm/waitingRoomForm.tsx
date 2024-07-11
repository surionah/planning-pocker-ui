"use client";

import { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useStore from "@/hooks/useStore";

export default function WaitingRoomForm() {
  const nicknameInputRef = useRef<HTMLInputElement | null>(null);
  const roomIdInputRef = useRef<HTMLInputElement | null>(null);
  const { nickname, setNickname } = useStore();

  const handleSetNickname = () => {
    setNickname(nicknameInputRef.current?.value || "");
    nicknameInputRef.current = null;
  };

  return (
    <>
      <div className="w-full h-full text-center">
        <h1 className="text-4xl">Planning Pocker</h1>
        {nickname ? (
          <p className="pt-12">
            Welcome <span className="font-bold">{nickname}</span> to Planning
            Pocker
          </p>
        ) : null}
        <div className="my-12 w-80 mx-auto">
          {nickname ? (
            <>
              <p>Please enter a room id to join</p>
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="Room id"
                  ref={roomIdInputRef}
                  id="room-id"
                />
                <Button variant="outline">Enter</Button>
              </div>
              <p className="mb-4">or create a new one</p>
              <Button variant="default">Create room</Button>
            </>
          ) : (
            <>
              <p>Please enter your nickname to start</p>
              <div className="flex gap-2 items-center">
                <Input
                  ref={nicknameInputRef}
                  placeholder="Nickname"
                  id="nickname"
                />
                <Button variant="default" onClick={handleSetNickname}>
                  Send
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
