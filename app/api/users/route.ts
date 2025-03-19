export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Alice" },
    { id: 6, name: "Bob" },
    { id: 7, name: "Alice" },
    { id: 8, name: "Bob" },
    { id: 9, name: "Alice" },
    { id: 10, name: "Bob" },
    { id: 11, name: "Alice" },
    { id: 12, name: "Bob" },
    { id: 13, name: "Alice" },
    { id: 14, name: "Bob" },
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

// DETETE request

// PATCH request
