<script>
	export let pivotTable;
	export let studentNames;
</script>

<table class="table-auto border-collapse border border-slate-500">
	<thead>
		<tr>
			<th>Date/Student</th>
			{#each studentNames as name (name)}
				<th class="border border-slate-600">{name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(pivotTable) as [date, commitsByStudent] (date)}
			<tr>
				<td class="border border-slate-600 text-right">{date}</td>
				{#each studentNames as studentName (studentName)}
					<td  class="border border-slate-600 text-center">{commitsByStudent[studentName] || 0}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
