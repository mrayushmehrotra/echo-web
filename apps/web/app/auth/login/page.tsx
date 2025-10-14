"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInTab from "./_components/sign-in-tab";
// import { SignUpTab } from "@echo-web/ui/sign-up-tab";

export default function Login() {
  return (
    <Tabs defaultValue="signin" className="mx-auto  my-6 px-4">
      <TabsList>
        <TabsTrigger value="signin">Sign in</TabsTrigger>
        <TabsTrigger value="signup">Sign up</TabsTrigger>
      </TabsList>
      <Card>
        <TabsContent className="!p-4" value="signin">
          <CardHeader className="text-2xl font-bold">
            <CardTitle> Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInTab />
          </CardContent>
        </TabsContent>
        <TabsContent value="signup">
          <CardHeader className="text-2xl font-bold">
            <CardTitle> Sign DOwn</CardTitle>
          </CardHeader>
          <CardContent>{/* <SignUpTab /> */}</CardContent>
        </TabsContent>
      </Card>
    </Tabs>
  );
}
