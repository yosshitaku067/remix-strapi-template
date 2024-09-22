import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { strapiClient } from "~/api/strapi-client";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = async () => {
	const { data } = await strapiClient.sightseeingSpot.getSightseeingSpots();

	console.log(data);

	return json({ data });
};

export default function Index() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>updatedAt</th>
						<th>createdAt</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((item) => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.attributes?.name}</td>
								<td>
									{new Date(
										item.attributes?.updatedAt || "",
									).toLocaleDateString()}
								</td>
								<td>
									{new Date(
										item.attributes?.createdAt || "",
									).toLocaleDateString()}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
