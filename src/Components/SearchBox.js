function SearchBox({searchChange}) {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-light-blue'
				type='search' 
				placeholder='SEARCH ROBOTS......'
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;