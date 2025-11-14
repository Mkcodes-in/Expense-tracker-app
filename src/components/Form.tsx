export default function Form() {
  return (
    <div className="p-4 bg-gray-700">
      <form>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" id="amount" />
        </div>
        <div>
          <label htmlFor="category">Categery</label>
          <input type="text" name="category" id="category" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}
