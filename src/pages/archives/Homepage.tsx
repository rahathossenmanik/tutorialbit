import React, { useEffect, useState } from 'react';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from '../../constants/apis/typewiseArchiveEndpoints';
import LoadingPage from '../common/LoadingPage';
import { ICategory } from './../../interfaces/ICategory';

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await fetch(process.env.REACT_APP_BASE_URL + TYPEWISE_ARCHIVE_ENDPOINTS.categories());
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  document.title = 'Home - Tutorial Bit';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <div className="row">
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {categories.map((category, idx) =>
            category?.count > 0 ? (
              <li className="border rounded-lg p-4 pb-2">
                <div className="space-y-2">
                  <a href={category.link}>
                    <h4
                      className="text-gray-800 font-semibold hover:text-indigo-500"
                      dangerouslySetInnerHTML={{
                        __html: category?.name
                      }}></h4>
                  </a>
                  <p
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: category?.description
                    }}></p>
                </div>
                <div className="pt-2 mt-2 border-t text-right">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-gray-600 text-sm">{category?.count} Lessons</span>
                    </div>
                    <a href={category.link}>
                      <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150  hover:text-indigo-500 hover:bg-gray-100">
                        Practice
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
