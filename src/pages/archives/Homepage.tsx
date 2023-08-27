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
        {categories?.map((category, i) =>
          category?.count > 0 ? (
            <div className="col-12 col-sm-6 py-3" key={i}>
              <div className="card" style={{ height: '100%', width: '100%' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h4
                    className="card-title"
                    dangerouslySetInnerHTML={{
                      __html: category?.name
                    }}></h4>
                  <div
                    className="card-text mb-3"
                    dangerouslySetInnerHTML={{
                      __html: category?.description
                    }}></div>
                  <a href={category.link}>
                    <button type="button" className="btn btn-primary">
                      Start Learning
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Homepage;
