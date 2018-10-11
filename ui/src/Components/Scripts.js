import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Done from "@material-ui/icons/Done";
import Cancel from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import TableHead from "@material-ui/core/TableHead"

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	},
	iconCell: {
		width: "7.4em"
	},
	textField: {
		width: "8em"
	}
});

class Scripts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scripts: [
				{
					
					lastlogin: "10102010",
					script_name: "Script1",
				},
				{
					lastlogin: "10102005",
					script_name: "Script2"
				},
				{
					lastlogin: "10102001",
					script_name: "Script3"
				},
				{
					lastlogin: "10102000",
					script_name: "Script4"
				}
			],
			editedIndex: -1,
			editedscript_name: "",
			editedlastlogin: ""
		};
	}
	deleteComponent(index) {
		const scripts = this.state.scripts.slice();
		scripts.splice(index, 1);
		this.setState({ scripts });
	}

	editComponent(index) {
		this.setState({ editedIndex: index });
	}
	cancelEdit = () => {
		this.setState({ editedIndex: -1 });
	};
	updateComponent(index) {
		const scripts = this.state.scripts.slice();
		scripts[index].script_name = this.state.editedscript_name;
		scripts[index].lastlogin = this.state.editedlastlogin;
		this.setState({
			scripts,
			editedscript_name: "",
			editedlastlogin: "",
			editedIndex: -1
		});
	}
	handleChange = lastlogin => event => {
		this.setState({
			[lastlogin]: event.target.value
		});
	};
	render() {

		const { editedIndex, scripts } = this.state;
		const { classes } = this.props;

		const deleteIcon = index => (
			<IconButton onClick={() => this.deleteComponent(index)}>
				<DeleteIcon color="secondary" />
			</IconButton>
		);

		const editIcon = index => (
			<IconButton onClick={() => this.editComponent(index)}>
				<EditIcon color="primary" />
			</IconButton>
		);

		const okBtn = index => (
			<IconButton onClick={() => this.updateComponent(index)}>
				<Done color="secondary" />
			</IconButton>
		);

		const cancelBtn = (
			<IconButton onClick={this.cancelEdit}>
				<Cancel color="primary" />
			</IconButton>
		);

		const editscript_name = (
			<TextField
				id="script_name"
				label="script_name"
				className={classes.textField}
				value={this.state.editedscript_name}
				margin="normal"
				onChange={this.handleChange("editedscript_name")}
			/>
		);
		const editlastlogin = (
			<TextField
				id="lastlogin"
				label=""
				className={classes.textField}
				value={this.state.editedlastlogin}
				margin="normal"
				onChange={this.handleChange("editedlastlogin")}
			/>
		);
		return (
			<Paper className={classes.root}>
				<div>
					<Table className={classes.table}>

						<TableHead>
							<TableRow>
								<TableCell>Edit</TableCell>
								<TableCell>Nome</TableCell>
								<TableCell>Last Login</TableCell>
							</TableRow>
						</TableHead>


						<TableBody>


							{scripts.map(n => {
								return (
									<TableRow key={n.script_name}>
										<TableCell
											className={classes.iconCell}
											component="th"
											scope="row"
										>
											<div style={divStyle}>
												{scripts.indexOf(n) === editedIndex
													? okBtn(scripts.indexOf(n))
													: deleteIcon(scripts.indexOf(n))}
												{scripts.indexOf(n) === editedIndex
													? cancelBtn
													: editIcon(scripts.indexOf(n))}
											</div>
										</TableCell>
										<TableCell>
											{scripts.indexOf(n) === editedIndex
												? editscript_name
												: n.script_name}
										</TableCell>
										<TableCell>
											{scripts.indexOf(n) === editedIndex ? editlastlogin : n.lastlogin}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</Paper>
		);
	}
}

var divStyle = {
	display: 'flex',
};

export default withStyles(styles)(Scripts);
