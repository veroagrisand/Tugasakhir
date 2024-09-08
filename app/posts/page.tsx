import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/ViewUserButton";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const base__url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = async () => {
  const response = await fetch(base__url);
  const posts: Iposts[] = await response.json();

  return (
    <>
      <p className="text-md">Time: {new Date().toDateString()}</p>
      <h1 className="bg-slate-600 bg-opacity-25 text-center font-bold px-4 py-4">Postingan Page</h1>
      {posts.map((post) => (
        <CardList key={post.id}>
          <Table aria-label="Posts table">
            <TableHeader>
              <TableColumn>Id</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Body</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <ViewUserButton userId={post.userId} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardList>
      ))}
    </>
  );
};

export default PostPage;