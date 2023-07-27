import { Notification } from "@hilla/react-components/Notification.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { HelloEndpoint } from "Frontend/generated/endpoints.js";
import { useState } from "react";
import { Button } from "@/components/ui/button"

export default function MainView() {
  const [name, setName] = useState("");

  return (
    <>
      <TextField
        label="Your name"
        className={"text-red-600 "}
        onValueChanged={(e) => {
          setName(e.detail.value);
        }}
      />
      <Button
        onClick={async () => {
          const serverResponse = await HelloEndpoint.sayHello(name);
          Notification.show(serverResponse);
        }}
      >
        Say hello
      </Button>
    </>
  );
}
