"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import Section from "./section";

const Contact = () => {
  return (
    <Section className="">
      <h2 className="font-bold text-6xl mb-8" id="contact">
        Contact
      </h2>

      {/* <Form>
        <FormField name="name" render={()=> (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input />
            </FormControl>
          </FormItem>
        )}></FormField>
      </Form> */}

      <Alert variant="default">
        <AlertTitle>Under Construction</AlertTitle>
        <AlertDescription>Coming Soon!</AlertDescription>
      </Alert>
    </Section>
  );
};

export default Contact;
