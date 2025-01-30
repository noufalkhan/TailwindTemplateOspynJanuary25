import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";

import React from "react";

const page = () => {
  return (
    <>
       <Button variant="outline">
      <MailOpen /> Login with Email
    </Button>
    </>
  );
};

export default page;
