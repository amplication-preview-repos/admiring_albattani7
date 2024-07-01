import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InterviewerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="department" source="department" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
