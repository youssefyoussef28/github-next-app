import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filterCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLocaleLowerCase());
  });
  return NextResponse.json(filterCourses);
}

// const full = new URL(request.url);
// Log this to understand the new URL object
