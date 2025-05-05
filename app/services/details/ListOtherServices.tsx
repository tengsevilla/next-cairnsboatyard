
const lists = [
    "Trestles and planks available for use within the boatyard.",
    "Paint screens are available for customers to contain grinding debris and overspray.",
    "All yard and hardstand locations are equipped with water and single-phase power.",
    "Compressed air is available for hire.",
    "On-site fiberglass specialists.",
    "Mechanical repair services, ranging from general maintenance to complete engine replacement.",
    "Painting services.",
    "Sign writing."
];

export const ListOtherServices = () => {
    return (
        <div className="text-gray-600 mt-4">
            {lists.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    )
}