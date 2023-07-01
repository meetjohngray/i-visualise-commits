<script>
	export let data;
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Total Commits</th>
			<th>Progress Score</th>
			<th>Last Commit Date</th>
		</tr>
	</thead>
	<tbody>
		{#each data as student}
			<tr>
				<td>{student.name}</td>
				<td>{student.totalCommits}</td>
				<td>{student.progressScore}</td>
				<td>{student.lastCommitDate.toLocaleString()}</td>
			</tr>
		{/each}
	</tbody>
</table>
