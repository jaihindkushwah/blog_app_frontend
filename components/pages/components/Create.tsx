import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Create() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Item</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Create a new item or project here.</p>
      </CardContent>
    </Card>
  );
}

export default Create;
