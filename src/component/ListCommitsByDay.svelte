<script>
	export let pivotTable;
	export let studentNames;
</script>

<table>
	<thead>
		<tr>
			<th>Repo/Student</th>
			{#each studentNames as name (name)}
				<th>{name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(pivotTable) as [repoName, commitsByStudent] (repoName)}
			<tr>
				<td>{repoName}</td>
				{#each studentNames as studentName (studentName)}
					<td>{commitsByStudent[studentName] || ''}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
