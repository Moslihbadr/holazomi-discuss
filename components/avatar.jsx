import { signOut } from "@/actions";
import {
  Avatar,
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";

export default function UserAvatar({ image, name }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar src={image} />
      </PopoverTrigger>
      <PopoverContent>
        <form action={signOut} className="p-3">
          <h3 className="mb-1">{name}</h3>
          <Divider className="my-2" />
          <Button type="submit" color="danger" variant="bordered">Sign Out</Button>
        </form>
      </PopoverContent>
    </Popover>
  )
};
