<script>
	export let pivotTable;
	export let studentNames;
</script>

<table>
	<thead>
		<tr>
			<th>Date/Student</th>
			{#each studentNames as name (name)}
				<th>{name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(pivotTable) as [date, commitsByStudent] (date)}
			<tr>
				<td title="test">{date}</td>
				{#each studentNames as studentName (studentName)}
					<td>{commitsByStudent[studentName] || 0}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
