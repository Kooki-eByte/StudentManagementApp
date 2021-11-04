export async function getAllStudents() {
  const response = await fetch("/api/v1/student/all");
  return await response.json();
}

export async function createStudent(data) {
  const response = await fetch(`/api/v1/student/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}
