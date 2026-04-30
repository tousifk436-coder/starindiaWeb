import React from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../services/data/blogData";

const OtherBlogs = ({ currentId }) => {
  const navigate = useNavigate();

  const filtered = blogs.filter((b) => b.id !== currentId).slice(0, 3);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Related Blogs</h3>

      <div className="space-y-4">
        {filtered.map((b) => (
          <div
            key={b.id}
            onClick={() => navigate(`/blog/${b.id}`)}
            className="flex gap-3 cursor-pointer"
          >
            <img src={b.image} className="w-20 h-16 object-cover rounded" />
            <p className="text-sm font-medium">{b.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
