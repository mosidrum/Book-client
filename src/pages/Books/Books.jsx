import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/paths';

const Books = () => {
	const baseUrl = 'http://localhost:8000/books';
	const [data, setData] = useState([]);
	const [loading, isLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('');
	useEffect(() => {
		const fetchdata = async () => {
			try {
        let url = baseUrl;
        if(selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch books');
				}
				const books = await response.json();

				setData(books);
				isLoading(false);
			} catch (error) {

				setError('Something went wrong while fetching data');
				isLoading(false);
			}
		};
		fetchdata();
	}, [selectedCategory]);

	return (
		<div>
			<h1>Books</h1>
			<p>
				This is where we use NodeJs, express & mongoDB to grab some data. The
				data below is pulled fromo a mongo DB database.
			</p>
      <Link to={paths.createBook}>Add New Book</Link>
			<h2>Available books</h2>
      <div className='filters'>
        <label>Categories</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">Other</option>
        </select>
      </div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<ul className="books">
					{data.map((book) => (
						<li key={book._id}>
							<Link to={`${paths.books}/${book._id}`}>
								<img
									src={`http://localhost:8000/uploads/${book.thumbnail}`}
									alt={book.title}
								/>
								<h3>{book.title}</h3>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Books;
