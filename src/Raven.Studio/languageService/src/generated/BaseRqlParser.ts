// Generated from languageService/grammar/BaseRqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BaseRqlParserVisitor } from "./BaseRqlParserVisitor";


export class BaseRqlParser extends Parser {
	public static readonly CL_CUR = 1;
	public static readonly CL_PAR = 2;
	public static readonly CL_Q = 3;
	public static readonly COMMA = 4;
	public static readonly DOT = 5;
	public static readonly EQUAL = 6;
	public static readonly MATH = 7;
	public static readonly OP_CUR = 8;
	public static readonly OP_PAR = 9;
	public static readonly OP_Q = 10;
	public static readonly SLASH = 11;
	public static readonly COLON = 12;
	public static readonly SEMICOLON = 13;
	public static readonly BACKSLASH = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly AT = 17;
	public static readonly HASH = 18;
	public static readonly DOL = 19;
	public static readonly PERCENT = 20;
	public static readonly POWER = 21;
	public static readonly AMP = 22;
	public static readonly STAR = 23;
	public static readonly QUESTION_MARK = 24;
	public static readonly EXCLAMATION = 25;
	public static readonly ALL = 26;
	public static readonly ALL_DOCS = 27;
	public static readonly ALPHANUMERIC = 28;
	public static readonly AND = 29;
	public static readonly AS = 30;
	public static readonly BETWEEN = 31;
	public static readonly DISTINCT = 32;
	public static readonly DOUBLE = 33;
	public static readonly ENDS_WITH = 34;
	public static readonly STARTS_WITH = 35;
	public static readonly FALSE = 36;
	public static readonly FACET = 37;
	public static readonly FROM = 38;
	public static readonly GROUP_BY = 39;
	public static readonly ID = 40;
	public static readonly IN = 41;
	public static readonly INCLUDE = 42;
	public static readonly UPDATE = 43;
	public static readonly INDEX = 44;
	public static readonly INTERSECT = 45;
	public static readonly LOAD = 46;
	public static readonly LONG = 47;
	public static readonly MATCH = 48;
	public static readonly METADATA = 49;
	public static readonly MORELIKETHIS = 50;
	public static readonly NOT = 51;
	public static readonly NULL = 52;
	public static readonly OR = 53;
	public static readonly ORDER_BY = 54;
	public static readonly OFFSET = 55;
	public static readonly SELECT = 56;
	public static readonly JS_SELECT = 57;
	public static readonly SORTING = 58;
	public static readonly STRING_W = 59;
	public static readonly TO = 60;
	public static readonly TRUE = 61;
	public static readonly WHERE = 62;
	public static readonly WITH = 63;
	public static readonly EXACT = 64;
	public static readonly BOOST = 65;
	public static readonly SEARCH = 66;
	public static readonly LIMIT = 67;
	public static readonly FUZZY = 68;
	public static readonly TIMESERIES = 69;
	public static readonly JS_FUNCTION_DECLARATION = 70;
	public static readonly TIMESERIES_FUNCTION_DECLARATION = 71;
	public static readonly NUM = 72;
	public static readonly STRING = 73;
	public static readonly SINGLE_QUOTE_STRING = 74;
	public static readonly WORD = 75;
	public static readonly WS = 76;
	public static readonly TS_METHOD = 77;
	public static readonly TS_OP_C = 78;
	public static readonly TS_CL_C = 79;
	public static readonly TS_OP_PAR = 80;
	public static readonly TS_CL_PAR = 81;
	public static readonly TS_OP_Q = 82;
	public static readonly TS_CL_Q = 83;
	public static readonly TS_DOT = 84;
	public static readonly TS_COMMA = 85;
	public static readonly TS_DOL = 86;
	public static readonly TS_MATH = 87;
	public static readonly TS_OR = 88;
	public static readonly TS_TRUE = 89;
	public static readonly TS_NOT = 90;
	public static readonly TS_AS = 91;
	public static readonly TS_AND = 92;
	public static readonly TS_FROM = 93;
	public static readonly TS_WHERE = 94;
	public static readonly TS_GROUPBY = 95;
	public static readonly TS_BETWEEN = 96;
	public static readonly TS_FIRST = 97;
	public static readonly TS_LAST = 98;
	public static readonly TS_WITH = 99;
	public static readonly TS_TIMERANGE = 100;
	public static readonly TS_GROUPBY_VALUE = 101;
	public static readonly TS_SELECT = 102;
	public static readonly TS_LOAD = 103;
	public static readonly TS_SCALE = 104;
	public static readonly TS_OFFSET = 105;
	public static readonly TS_NUM = 106;
	public static readonly TS_STRING = 107;
	public static readonly TS_SINGLE_QUOTE_STRING = 108;
	public static readonly TS_WORD = 109;
	public static readonly TS_WS = 110;
	public static readonly US_OP = 111;
	public static readonly US_CL = 112;
	public static readonly US_DATA = 113;
	public static readonly JS_OP = 114;
	public static readonly JS_CL = 115;
	public static readonly JS_DATA = 116;
	public static readonly JFN_WORD = 117;
	public static readonly JFN_OP_PAR = 118;
	public static readonly JFN_CL_PAR = 119;
	public static readonly JFN_OP_JS = 120;
	public static readonly JFN_COMMA = 121;
	public static readonly JFN_WS = 122;
	public static readonly RULE_prog = 0;
	public static readonly RULE_functionStatment = 1;
	public static readonly RULE_updateStatement = 2;
	public static readonly RULE_fromMode = 3;
	public static readonly RULE_fromStatement = 4;
	public static readonly RULE_indexName = 5;
	public static readonly RULE_collectionName = 6;
	public static readonly RULE_aliasWithOptionalAs = 7;
	public static readonly RULE_groupByMode = 8;
	public static readonly RULE_groupByStatement = 9;
	public static readonly RULE_suggestGroupBy = 10;
	public static readonly RULE_whereMode = 11;
	public static readonly RULE_whereStatement = 12;
	public static readonly RULE_expr = 13;
	public static readonly RULE_binary = 14;
	public static readonly RULE_exprValue = 15;
	public static readonly RULE_inFunction = 16;
	public static readonly RULE_betweenFunction = 17;
	public static readonly RULE_specialFunctions = 18;
	public static readonly RULE_specialFunctionName = 19;
	public static readonly RULE_specialParam = 20;
	public static readonly RULE_loadMode = 21;
	public static readonly RULE_loadStatement = 22;
	public static readonly RULE_loadDocumentByName = 23;
	public static readonly RULE_orderByMode = 24;
	public static readonly RULE_orderByStatement = 25;
	public static readonly RULE_orderByItem = 26;
	public static readonly RULE_orderBySorting = 27;
	public static readonly RULE_orderBySortingAs = 28;
	public static readonly RULE_orderByOrder = 29;
	public static readonly RULE_selectMode = 30;
	public static readonly RULE_selectStatement = 31;
	public static readonly RULE_projectField = 32;
	public static readonly RULE_jsFunction = 33;
	public static readonly RULE_jsBody = 34;
	public static readonly RULE_aliasWithRequiredAs = 35;
	public static readonly RULE_aliasName = 36;
	public static readonly RULE_prealias = 37;
	public static readonly RULE_asArray = 38;
	public static readonly RULE_includeMode = 39;
	public static readonly RULE_includeStatement = 40;
	public static readonly RULE_limitStatement = 41;
	public static readonly RULE_variable = 42;
	public static readonly RULE_memberName = 43;
	public static readonly RULE_param = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_cacheParam = 46;
	public static readonly RULE_parameterWithOptionalAlias = 47;
	public static readonly RULE_variableOrFunction = 48;
	public static readonly RULE_function = 49;
	public static readonly RULE_arguments = 50;
	public static readonly RULE_identifiersWithoutRootKeywords = 51;
	public static readonly RULE_rootKeywords = 52;
	public static readonly RULE_identifiersAllNames = 53;
	public static readonly RULE_date = 54;
	public static readonly RULE_dateString = 55;
	public static readonly RULE_tsProg = 56;
	public static readonly RULE_tsIncludeTimeseriesFunction = 57;
	public static readonly RULE_tsIncludeLiteral = 58;
	public static readonly RULE_tsIncludeSpecialMethod = 59;
	public static readonly RULE_tsQueryBody = 60;
	public static readonly RULE_tsOffset = 61;
	public static readonly RULE_tsFunction = 62;
	public static readonly RULE_tsTimeRangeStatement = 63;
	public static readonly RULE_tsLoadStatement = 64;
	public static readonly RULE_tsAlias = 65;
	public static readonly RULE_tsFROM = 66;
	public static readonly RULE_tsWHERE = 67;
	public static readonly RULE_tsExpr = 68;
	public static readonly RULE_tsBetween = 69;
	public static readonly RULE_tsBinary = 70;
	public static readonly RULE_tsLiteral = 71;
	public static readonly RULE_tsTimeRangeFirst = 72;
	public static readonly RULE_tsTimeRangeLast = 73;
	public static readonly RULE_tsCollectionName = 74;
	public static readonly RULE_tsGroupBy = 75;
	public static readonly RULE_tsSelect = 76;
	public static readonly RULE_tsSelectScaleProjection = 77;
	public static readonly RULE_tsSelectVariable = 78;
	public static readonly RULE_tsIdentifiers = 79;
	public static readonly RULE_updateBody = 80;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "functionStatment", "updateStatement", "fromMode", "fromStatement", 
		"indexName", "collectionName", "aliasWithOptionalAs", "groupByMode", "groupByStatement", 
		"suggestGroupBy", "whereMode", "whereStatement", "expr", "binary", "exprValue", 
		"inFunction", "betweenFunction", "specialFunctions", "specialFunctionName", 
		"specialParam", "loadMode", "loadStatement", "loadDocumentByName", "orderByMode", 
		"orderByStatement", "orderByItem", "orderBySorting", "orderBySortingAs", 
		"orderByOrder", "selectMode", "selectStatement", "projectField", "jsFunction", 
		"jsBody", "aliasWithRequiredAs", "aliasName", "prealias", "asArray", "includeMode", 
		"includeStatement", "limitStatement", "variable", "memberName", "param", 
		"literal", "cacheParam", "parameterWithOptionalAlias", "variableOrFunction", 
		"function", "arguments", "identifiersWithoutRootKeywords", "rootKeywords", 
		"identifiersAllNames", "date", "dateString", "tsProg", "tsIncludeTimeseriesFunction", 
		"tsIncludeLiteral", "tsIncludeSpecialMethod", "tsQueryBody", "tsOffset", 
		"tsFunction", "tsTimeRangeStatement", "tsLoadStatement", "tsAlias", "tsFROM", 
		"tsWHERE", "tsExpr", "tsBetween", "tsBinary", "tsLiteral", "tsTimeRangeFirst", 
		"tsTimeRangeLast", "tsCollectionName", "tsGroupBy", "tsSelect", "tsSelectScaleProjection", 
		"tsSelectVariable", "tsIdentifiers", "updateBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'/'", "':'", "';'", undefined, 
		"'+'", "'-'", "'@'", "'#'", undefined, "'%'", "'^'", "'&'", "'*'", "'?'", 
		"'!'", undefined, "'@all_docs'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CL_CUR", "CL_PAR", "CL_Q", "COMMA", "DOT", "EQUAL", "MATH", 
		"OP_CUR", "OP_PAR", "OP_Q", "SLASH", "COLON", "SEMICOLON", "BACKSLASH", 
		"PLUS", "MINUS", "AT", "HASH", "DOL", "PERCENT", "POWER", "AMP", "STAR", 
		"QUESTION_MARK", "EXCLAMATION", "ALL", "ALL_DOCS", "ALPHANUMERIC", "AND", 
		"AS", "BETWEEN", "DISTINCT", "DOUBLE", "ENDS_WITH", "STARTS_WITH", "FALSE", 
		"FACET", "FROM", "GROUP_BY", "ID", "IN", "INCLUDE", "UPDATE", "INDEX", 
		"INTERSECT", "LOAD", "LONG", "MATCH", "METADATA", "MORELIKETHIS", "NOT", 
		"NULL", "OR", "ORDER_BY", "OFFSET", "SELECT", "JS_SELECT", "SORTING", 
		"STRING_W", "TO", "TRUE", "WHERE", "WITH", "EXACT", "BOOST", "SEARCH", 
		"LIMIT", "FUZZY", "TIMESERIES", "JS_FUNCTION_DECLARATION", "TIMESERIES_FUNCTION_DECLARATION", 
		"NUM", "STRING", "SINGLE_QUOTE_STRING", "WORD", "WS", "TS_METHOD", "TS_OP_C", 
		"TS_CL_C", "TS_OP_PAR", "TS_CL_PAR", "TS_OP_Q", "TS_CL_Q", "TS_DOT", "TS_COMMA", 
		"TS_DOL", "TS_MATH", "TS_OR", "TS_TRUE", "TS_NOT", "TS_AS", "TS_AND", 
		"TS_FROM", "TS_WHERE", "TS_GROUPBY", "TS_BETWEEN", "TS_FIRST", "TS_LAST", 
		"TS_WITH", "TS_TIMERANGE", "TS_GROUPBY_VALUE", "TS_SELECT", "TS_LOAD", 
		"TS_SCALE", "TS_OFFSET", "TS_NUM", "TS_STRING", "TS_SINGLE_QUOTE_STRING", 
		"TS_WORD", "TS_WS", "US_OP", "US_CL", "US_DATA", "JS_OP", "JS_CL", "JS_DATA", 
		"JFN_WORD", "JFN_OP_PAR", "JFN_CL_PAR", "JFN_OP_JS", "JFN_COMMA", "JFN_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BaseRqlParser._LITERAL_NAMES, BaseRqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BaseRqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BaseRqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return BaseRqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BaseRqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BaseRqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BaseRqlParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.JS_FUNCTION_DECLARATION || _la === BaseRqlParser.TIMESERIES_FUNCTION_DECLARATION) {
				{
				{
				this.state = 162;
				this.functionStatment();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
			this.fromStatement();
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.GROUP_BY) {
				{
				this.state = 169;
				this.groupByStatement();
				}
			}

			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.WHERE) {
				{
				this.state = 172;
				this.whereStatement();
				}
			}

			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.LOAD) {
				{
				this.state = 175;
				this.loadStatement();
				}
			}

			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.ORDER_BY) {
				{
				this.state = 178;
				this.orderByStatement();
				}
			}

			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.UPDATE) {
				{
				this.state = 181;
				this.updateStatement();
				}
			}

			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.SELECT || _la === BaseRqlParser.JS_SELECT) {
				{
				this.state = 184;
				this.selectStatement();
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.INCLUDE) {
				{
				this.state = 187;
				this.includeStatement();
				}
			}

			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.LIMIT) {
				{
				this.state = 190;
				this.limitStatement();
				}
			}

			this.state = 193;
			this.match(BaseRqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionStatment(): FunctionStatmentContext {
		let _localctx: FunctionStatmentContext = new FunctionStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BaseRqlParser.RULE_functionStatment);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.JS_FUNCTION_DECLARATION:
				_localctx = new JavaScriptFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.jsFunction();
				}
				break;
			case BaseRqlParser.TIMESERIES_FUNCTION_DECLARATION:
				_localctx = new TimeSeriesFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.tsFunction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateStatement(): UpdateStatementContext {
		let _localctx: UpdateStatementContext = new UpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BaseRqlParser.RULE_updateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(BaseRqlParser.UPDATE);
			this.state = 200;
			this.match(BaseRqlParser.US_OP);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.US_OP) {
				{
				{
				this.state = 201;
				this.updateBody();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(BaseRqlParser.US_CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromMode(): FromModeContext {
		let _localctx: FromModeContext = new FromModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BaseRqlParser.RULE_fromMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(BaseRqlParser.FROM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromStatement(): FromStatementContext {
		let _localctx: FromStatementContext = new FromStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BaseRqlParser.RULE_fromStatement);
		let _la: number;
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new CollectionByIndexContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this.fromMode();
				this.state = 212;
				this.match(BaseRqlParser.INDEX);
				this.state = 213;
				(_localctx as CollectionByIndexContext)._collection = this.indexName();
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (BaseRqlParser.ALL - 26)) | (1 << (BaseRqlParser.ALPHANUMERIC - 26)) | (1 << (BaseRqlParser.AND - 26)) | (1 << (BaseRqlParser.AS - 26)) | (1 << (BaseRqlParser.BETWEEN - 26)) | (1 << (BaseRqlParser.DISTINCT - 26)) | (1 << (BaseRqlParser.DOUBLE - 26)) | (1 << (BaseRqlParser.ENDS_WITH - 26)) | (1 << (BaseRqlParser.STARTS_WITH - 26)) | (1 << (BaseRqlParser.FALSE - 26)) | (1 << (BaseRqlParser.FACET - 26)) | (1 << (BaseRqlParser.ID - 26)) | (1 << (BaseRqlParser.IN - 26)) | (1 << (BaseRqlParser.INTERSECT - 26)) | (1 << (BaseRqlParser.LONG - 26)) | (1 << (BaseRqlParser.MATCH - 26)) | (1 << (BaseRqlParser.METADATA - 26)) | (1 << (BaseRqlParser.MORELIKETHIS - 26)) | (1 << (BaseRqlParser.NOT - 26)) | (1 << (BaseRqlParser.NULL - 26)) | (1 << (BaseRqlParser.OR - 26)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (BaseRqlParser.SORTING - 58)) | (1 << (BaseRqlParser.STRING_W - 58)) | (1 << (BaseRqlParser.TO - 58)) | (1 << (BaseRqlParser.TRUE - 58)) | (1 << (BaseRqlParser.WITH - 58)) | (1 << (BaseRqlParser.EXACT - 58)) | (1 << (BaseRqlParser.BOOST - 58)) | (1 << (BaseRqlParser.SEARCH - 58)) | (1 << (BaseRqlParser.FUZZY - 58)) | (1 << (BaseRqlParser.STRING - 58)) | (1 << (BaseRqlParser.WORD - 58)))) !== 0)) {
					{
					this.state = 214;
					this.aliasWithOptionalAs();
					}
				}

				}
				break;

			case 2:
				_localctx = new AllCollectionsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.match(BaseRqlParser.FROM);
				this.state = 218;
				this.match(BaseRqlParser.ALL_DOCS);
				}
				break;

			case 3:
				_localctx = new CollectionByNameContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 219;
				this.fromMode();
				this.state = 220;
				(_localctx as CollectionByNameContext)._collection = this.collectionName();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (BaseRqlParser.ALL - 26)) | (1 << (BaseRqlParser.ALPHANUMERIC - 26)) | (1 << (BaseRqlParser.AND - 26)) | (1 << (BaseRqlParser.AS - 26)) | (1 << (BaseRqlParser.BETWEEN - 26)) | (1 << (BaseRqlParser.DISTINCT - 26)) | (1 << (BaseRqlParser.DOUBLE - 26)) | (1 << (BaseRqlParser.ENDS_WITH - 26)) | (1 << (BaseRqlParser.STARTS_WITH - 26)) | (1 << (BaseRqlParser.FALSE - 26)) | (1 << (BaseRqlParser.FACET - 26)) | (1 << (BaseRqlParser.ID - 26)) | (1 << (BaseRqlParser.IN - 26)) | (1 << (BaseRqlParser.INTERSECT - 26)) | (1 << (BaseRqlParser.LONG - 26)) | (1 << (BaseRqlParser.MATCH - 26)) | (1 << (BaseRqlParser.METADATA - 26)) | (1 << (BaseRqlParser.MORELIKETHIS - 26)) | (1 << (BaseRqlParser.NOT - 26)) | (1 << (BaseRqlParser.NULL - 26)) | (1 << (BaseRqlParser.OR - 26)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (BaseRqlParser.SORTING - 58)) | (1 << (BaseRqlParser.STRING_W - 58)) | (1 << (BaseRqlParser.TO - 58)) | (1 << (BaseRqlParser.TRUE - 58)) | (1 << (BaseRqlParser.WITH - 58)) | (1 << (BaseRqlParser.EXACT - 58)) | (1 << (BaseRqlParser.BOOST - 58)) | (1 << (BaseRqlParser.SEARCH - 58)) | (1 << (BaseRqlParser.FUZZY - 58)) | (1 << (BaseRqlParser.STRING - 58)) | (1 << (BaseRqlParser.WORD - 58)))) !== 0)) {
					{
					this.state = 221;
					this.aliasWithOptionalAs();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexName(): IndexNameContext {
		let _localctx: IndexNameContext = new IndexNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BaseRqlParser.RULE_indexName);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.WORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(BaseRqlParser.WORD);
				}
				break;
			case BaseRqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.match(BaseRqlParser.STRING);
				}
				break;
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.FUZZY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.identifiersWithoutRootKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collectionName(): CollectionNameContext {
		let _localctx: CollectionNameContext = new CollectionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BaseRqlParser.RULE_collectionName);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.WORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.match(BaseRqlParser.WORD);
				}
				break;
			case BaseRqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(BaseRqlParser.STRING);
				}
				break;
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.FUZZY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 233;
				this.identifiersWithoutRootKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasWithOptionalAs(): AliasWithOptionalAsContext {
		let _localctx: AliasWithOptionalAsContext = new AliasWithOptionalAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BaseRqlParser.RULE_aliasWithOptionalAs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.AS) {
				{
				this.state = 236;
				this.match(BaseRqlParser.AS);
				}
			}

			this.state = 239;
			_localctx._name = this.aliasName();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.OP_Q) {
				{
				this.state = 240;
				this.asArray();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByMode(): GroupByModeContext {
		let _localctx: GroupByModeContext = new GroupByModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BaseRqlParser.RULE_groupByMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(BaseRqlParser.GROUP_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByStatement(): GroupByStatementContext {
		let _localctx: GroupByStatementContext = new GroupByStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BaseRqlParser.RULE_groupByStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.groupByMode();
			{
			this.state = 246;
			_localctx._value = this.parameterWithOptionalAlias();
			}
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 247;
				this.match(BaseRqlParser.COMMA);
				{
				this.state = 248;
				this.parameterWithOptionalAlias();
				}
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public suggestGroupBy(): SuggestGroupByContext {
		let _localctx: SuggestGroupByContext = new SuggestGroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BaseRqlParser.RULE_suggestGroupBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereMode(): WhereModeContext {
		let _localctx: WhereModeContext = new WhereModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BaseRqlParser.RULE_whereMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(BaseRqlParser.WHERE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereStatement(): WhereStatementContext {
		let _localctx: WhereStatementContext = new WhereStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BaseRqlParser.RULE_whereStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.whereMode();
			this.state = 259;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, BaseRqlParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				_localctx = new OpParContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 262;
				this.match(BaseRqlParser.OP_PAR);
				this.state = 263;
				this.expr(0);
				this.state = 264;
				this.match(BaseRqlParser.CL_PAR);
				}
				break;

			case 2:
				{
				_localctx = new EqualExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 266;
				(_localctx as EqualExpressionContext)._left = this.exprValue();
				this.state = 267;
				this.match(BaseRqlParser.EQUAL);
				this.state = 268;
				(_localctx as EqualExpressionContext)._right = this.exprValue();
				}
				break;

			case 3:
				{
				_localctx = new MathExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 270;
				(_localctx as MathExpressionContext)._left = this.exprValue();
				this.state = 271;
				this.match(BaseRqlParser.MATH);
				this.state = 272;
				(_localctx as MathExpressionContext)._right = this.exprValue();
				}
				break;

			case 4:
				{
				_localctx = new SpecialFunctionstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 274;
				this.specialFunctions();
				}
				break;

			case 5:
				{
				_localctx = new InExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 275;
				this.inFunction();
				}
				break;

			case 6:
				{
				_localctx = new BetweenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 276;
				this.betweenFunction();
				}
				break;

			case 7:
				{
				_localctx = new NormalFuncContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 277;
				(_localctx as NormalFuncContext)._funcExpr = this.function();
				}
				break;

			case 8:
				{
				_localctx = new BooleanExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 278;
				this.match(BaseRqlParser.TRUE);
				this.state = 279;
				this.match(BaseRqlParser.AND);
				this.state = 281;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 280;
					this.match(BaseRqlParser.NOT);
					}
					break;
				}
				this.state = 283;
				this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 292;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinaryExpressionContext(new ExprContext(_parentctx, _parentState));
					(_localctx as BinaryExpressionContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_expr);
					this.state = 286;
					if (!(this.precpred(this._ctx, 9))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
					}
					this.state = 287;
					this.binary();
					this.state = 288;
					(_localctx as BinaryExpressionContext)._right = this.expr(10);
					}
					}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BaseRqlParser.RULE_binary);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.match(BaseRqlParser.AND);
				this.state = 296;
				this.match(BaseRqlParser.NOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.match(BaseRqlParser.OR);
				this.state = 298;
				this.match(BaseRqlParser.NOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
				this.match(BaseRqlParser.AND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 300;
				this.match(BaseRqlParser.OR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprValue(): ExprValueContext {
		let _localctx: ExprValueContext = new ExprValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BaseRqlParser.RULE_exprValue);
		try {
			_localctx = new ParameterExprContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inFunction(): InFunctionContext {
		let _localctx: InFunctionContext = new InFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BaseRqlParser.RULE_inFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			_localctx._value = this.literal();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.ALL) {
				{
				this.state = 306;
				this.match(BaseRqlParser.ALL);
				}
			}

			this.state = 309;
			this.match(BaseRqlParser.IN);
			this.state = 310;
			this.match(BaseRqlParser.OP_PAR);
			this.state = 311;
			_localctx._first = this.literal();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 312;
				this.match(BaseRqlParser.COMMA);
				this.state = 313;
				_localctx._next = this.literal();
				}
				}
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 319;
			this.match(BaseRqlParser.CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public betweenFunction(): BetweenFunctionContext {
		let _localctx: BetweenFunctionContext = new BetweenFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BaseRqlParser.RULE_betweenFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			_localctx._value = this.literal();
			this.state = 322;
			this.match(BaseRqlParser.BETWEEN);
			this.state = 323;
			_localctx._from = this.literal();
			this.state = 324;
			this.match(BaseRqlParser.AND);
			this.state = 325;
			_localctx._to = this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialFunctions(): SpecialFunctionsContext {
		let _localctx: SpecialFunctionsContext = new SpecialFunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, BaseRqlParser.RULE_specialFunctions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.specialFunctionName();
			this.state = 328;
			this.match(BaseRqlParser.OP_PAR);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BaseRqlParser.OP_PAR) | (1 << BaseRqlParser.OP_Q) | (1 << BaseRqlParser.DOL) | (1 << BaseRqlParser.ALL) | (1 << BaseRqlParser.ALPHANUMERIC) | (1 << BaseRqlParser.AND) | (1 << BaseRqlParser.BETWEEN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BaseRqlParser.DISTINCT - 32)) | (1 << (BaseRqlParser.DOUBLE - 32)) | (1 << (BaseRqlParser.ENDS_WITH - 32)) | (1 << (BaseRqlParser.STARTS_WITH - 32)) | (1 << (BaseRqlParser.FALSE - 32)) | (1 << (BaseRqlParser.FACET - 32)) | (1 << (BaseRqlParser.FROM - 32)) | (1 << (BaseRqlParser.GROUP_BY - 32)) | (1 << (BaseRqlParser.ID - 32)) | (1 << (BaseRqlParser.IN - 32)) | (1 << (BaseRqlParser.INCLUDE - 32)) | (1 << (BaseRqlParser.INDEX - 32)) | (1 << (BaseRqlParser.INTERSECT - 32)) | (1 << (BaseRqlParser.LOAD - 32)) | (1 << (BaseRqlParser.LONG - 32)) | (1 << (BaseRqlParser.MATCH - 32)) | (1 << (BaseRqlParser.METADATA - 32)) | (1 << (BaseRqlParser.MORELIKETHIS - 32)) | (1 << (BaseRqlParser.NOT - 32)) | (1 << (BaseRqlParser.NULL - 32)) | (1 << (BaseRqlParser.OR - 32)) | (1 << (BaseRqlParser.ORDER_BY - 32)) | (1 << (BaseRqlParser.SELECT - 32)) | (1 << (BaseRqlParser.SORTING - 32)) | (1 << (BaseRqlParser.STRING_W - 32)) | (1 << (BaseRqlParser.TO - 32)) | (1 << (BaseRqlParser.TRUE - 32)) | (1 << (BaseRqlParser.WHERE - 32)) | (1 << (BaseRqlParser.WITH - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BaseRqlParser.EXACT - 64)) | (1 << (BaseRqlParser.BOOST - 64)) | (1 << (BaseRqlParser.SEARCH - 64)) | (1 << (BaseRqlParser.LIMIT - 64)) | (1 << (BaseRqlParser.FUZZY - 64)) | (1 << (BaseRqlParser.NUM - 64)) | (1 << (BaseRqlParser.STRING - 64)) | (1 << (BaseRqlParser.WORD - 64)))) !== 0)) {
				{
				this.state = 329;
				this.specialParam(0);
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BaseRqlParser.AS) {
					{
					this.state = 330;
					this.aliasWithRequiredAs();
					}
				}

				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BaseRqlParser.COMMA) {
					{
					{
					this.state = 333;
					this.match(BaseRqlParser.COMMA);
					this.state = 334;
					this.specialParam(0);
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BaseRqlParser.AS) {
						{
						this.state = 335;
						this.aliasWithRequiredAs();
						}
					}

					}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 345;
			this.match(BaseRqlParser.CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialFunctionName(): SpecialFunctionNameContext {
		let _localctx: SpecialFunctionNameContext = new SpecialFunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, BaseRqlParser.RULE_specialFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			_la = this._input.LA(1);
			if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (BaseRqlParser.ENDS_WITH - 34)) | (1 << (BaseRqlParser.STARTS_WITH - 34)) | (1 << (BaseRqlParser.FACET - 34)) | (1 << (BaseRqlParser.ID - 34)) | (1 << (BaseRqlParser.INTERSECT - 34)) | (1 << (BaseRqlParser.MORELIKETHIS - 34)) | (1 << (BaseRqlParser.EXACT - 34)) | (1 << (BaseRqlParser.BOOST - 34)))) !== 0) || _la === BaseRqlParser.SEARCH || _la === BaseRqlParser.FUZZY)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public specialParam(): SpecialParamContext;
	public specialParam(_p: number): SpecialParamContext;
	// @RuleVersion(0)
	public specialParam(_p?: number): SpecialParamContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SpecialParamContext = new SpecialParamContext(this._ctx, _parentState);
		let _prevctx: SpecialParamContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, BaseRqlParser.RULE_specialParam, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 350;
				this.match(BaseRqlParser.OP_PAR);
				this.state = 351;
				this.specialParam(0);
				this.state = 352;
				this.match(BaseRqlParser.CL_PAR);
				}
				break;

			case 2:
				{
				this.state = 354;
				this.variable();
				this.state = 355;
				this.match(BaseRqlParser.BETWEEN);
				this.state = 356;
				this.specialParam(12);
				}
				break;

			case 3:
				{
				this.state = 358;
				this.inFunction();
				}
				break;

			case 4:
				{
				this.state = 359;
				this.betweenFunction();
				}
				break;

			case 5:
				{
				this.state = 360;
				this.specialFunctions();
				}
				break;

			case 6:
				{
				this.state = 361;
				this.date();
				}
				break;

			case 7:
				{
				this.state = 362;
				this.function();
				}
				break;

			case 8:
				{
				this.state = 363;
				this.variable();
				}
				break;

			case 9:
				{
				this.state = 364;
				this.identifiersAllNames();
				}
				break;

			case 10:
				{
				this.state = 365;
				this.match(BaseRqlParser.NUM);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						_localctx = new SpecialParamContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_specialParam);
						this.state = 368;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 369;
						this.match(BaseRqlParser.EQUAL);
						this.state = 370;
						this.specialParam(14);
						}
						break;

					case 2:
						{
						_localctx = new SpecialParamContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_specialParam);
						this.state = 371;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 372;
						this.match(BaseRqlParser.AND);
						this.state = 373;
						this.specialParam(12);
						}
						break;

					case 3:
						{
						_localctx = new SpecialParamContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_specialParam);
						this.state = 374;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 375;
						this.match(BaseRqlParser.OR);
						this.state = 376;
						this.specialParam(11);
						}
						break;

					case 4:
						{
						_localctx = new SpecialParamContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_specialParam);
						this.state = 377;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 378;
						this.match(BaseRqlParser.MATH);
						this.state = 379;
						this.specialParam(10);
						}
						break;
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadMode(): LoadModeContext {
		let _localctx: LoadModeContext = new LoadModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, BaseRqlParser.RULE_loadMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(BaseRqlParser.LOAD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadStatement(): LoadStatementContext {
		let _localctx: LoadStatementContext = new LoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, BaseRqlParser.RULE_loadStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.loadMode();
			this.state = 388;
			_localctx._item = this.loadDocumentByName();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 389;
				this.match(BaseRqlParser.COMMA);
				this.state = 390;
				this.loadDocumentByName();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadDocumentByName(): LoadDocumentByNameContext {
		let _localctx: LoadDocumentByNameContext = new LoadDocumentByNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, BaseRqlParser.RULE_loadDocumentByName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			_localctx._name = this.variable();
			this.state = 397;
			_localctx._as = this.aliasWithOptionalAs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByMode(): OrderByModeContext {
		let _localctx: OrderByModeContext = new OrderByModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, BaseRqlParser.RULE_orderByMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(BaseRqlParser.ORDER_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByStatement(): OrderByStatementContext {
		let _localctx: OrderByStatementContext = new OrderByStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, BaseRqlParser.RULE_orderByStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.orderByMode();
			this.state = 402;
			_localctx._value = this.orderByItem();
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 403;
				this.match(BaseRqlParser.COMMA);
				{
				this.state = 404;
				this.orderByItem();
				}
				}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByItem(): OrderByItemContext {
		let _localctx: OrderByItemContext = new OrderByItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, BaseRqlParser.RULE_orderByItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			_localctx._value = this.literal();
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.AS) {
				{
				this.state = 411;
				_localctx._order = this.orderBySorting();
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.SORTING) {
				{
				this.state = 414;
				_localctx._orderValueType = this.orderByOrder();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderBySorting(): OrderBySortingContext {
		let _localctx: OrderBySortingContext = new OrderBySortingContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, BaseRqlParser.RULE_orderBySorting);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(BaseRqlParser.AS);
			this.state = 418;
			_localctx._sortingMode = this.orderBySortingAs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderBySortingAs(): OrderBySortingAsContext {
		let _localctx: OrderBySortingAsContext = new OrderBySortingAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, BaseRqlParser.RULE_orderBySortingAs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (BaseRqlParser.ALPHANUMERIC - 28)) | (1 << (BaseRqlParser.DOUBLE - 28)) | (1 << (BaseRqlParser.LONG - 28)) | (1 << (BaseRqlParser.STRING_W - 28)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByOrder(): OrderByOrderContext {
		let _localctx: OrderByOrderContext = new OrderByOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, BaseRqlParser.RULE_orderByOrder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(BaseRqlParser.SORTING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectMode(): SelectModeContext {
		let _localctx: SelectModeContext = new SelectModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, BaseRqlParser.RULE_selectMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(BaseRqlParser.SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, BaseRqlParser.RULE_selectStatement);
		let _la: number;
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new GetAllDistinctContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.selectMode();
				this.state = 427;
				this.match(BaseRqlParser.DISTINCT);
				this.state = 428;
				this.match(BaseRqlParser.STAR);
				this.state = 430;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 429;
					this.limitStatement();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ProjectIndividualFieldsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.selectMode();
				this.state = 434;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 433;
					this.match(BaseRqlParser.DISTINCT);
					}
					break;
				}
				this.state = 436;
				(_localctx as ProjectIndividualFieldsContext)._field = this.projectField();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BaseRqlParser.COMMA) {
					{
					{
					this.state = 437;
					this.match(BaseRqlParser.COMMA);
					this.state = 438;
					this.projectField();
					}
					}
					this.state = 443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.limitStatement();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new JavascriptCodeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 447;
				this.match(BaseRqlParser.JS_SELECT);
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BaseRqlParser.JS_OP) {
					{
					{
					this.state = 448;
					this.jsBody();
					}
					}
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 454;
				this.match(BaseRqlParser.JS_CL);
				this.state = 456;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 455;
					this.limitStatement();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectField(): ProjectFieldContext {
		let _localctx: ProjectFieldContext = new ProjectFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, BaseRqlParser.RULE_projectField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 460;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 461;
				this.specialFunctions();
				}
				break;

			case 3:
				{
				this.state = 462;
				this.tsProg();
				}
				break;
			}
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.AS) {
				{
				this.state = 465;
				this.aliasWithRequiredAs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsFunction(): JsFunctionContext {
		let _localctx: JsFunctionContext = new JsFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, BaseRqlParser.RULE_jsFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(BaseRqlParser.JS_FUNCTION_DECLARATION);
			this.state = 469;
			this.match(BaseRqlParser.JFN_WORD);
			this.state = 470;
			this.match(BaseRqlParser.JFN_OP_PAR);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.JFN_WORD) {
				{
				this.state = 471;
				this.match(BaseRqlParser.JFN_WORD);
				}
			}

			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.JFN_COMMA) {
				{
				{
				this.state = 474;
				this.match(BaseRqlParser.JFN_COMMA);
				this.state = 475;
				this.match(BaseRqlParser.JFN_WORD);
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 481;
			this.match(BaseRqlParser.JFN_CL_PAR);
			this.state = 482;
			this.match(BaseRqlParser.JFN_OP_JS);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.JS_OP) {
				{
				{
				this.state = 483;
				this.jsBody();
				}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 489;
			this.match(BaseRqlParser.JS_CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsBody(): JsBodyContext {
		let _localctx: JsBodyContext = new JsBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, BaseRqlParser.RULE_jsBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(BaseRqlParser.JS_OP);
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.JS_OP) {
				{
				{
				this.state = 492;
				this.jsBody();
				}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 498;
			this.match(BaseRqlParser.JS_CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasWithRequiredAs(): AliasWithRequiredAsContext {
		let _localctx: AliasWithRequiredAsContext = new AliasWithRequiredAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, BaseRqlParser.RULE_aliasWithRequiredAs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(BaseRqlParser.AS);
			this.state = 501;
			_localctx._name = this.aliasName();
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.OP_Q) {
				{
				this.state = 502;
				this.asArray();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, BaseRqlParser.RULE_aliasName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.WORD:
				{
				this.state = 505;
				this.match(BaseRqlParser.WORD);
				}
				break;
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.FUZZY:
				{
				this.state = 506;
				this.identifiersWithoutRootKeywords();
				}
				break;
			case BaseRqlParser.STRING:
				{
				this.state = 507;
				this.match(BaseRqlParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prealias(): PrealiasContext {
		let _localctx: PrealiasContext = new PrealiasContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, BaseRqlParser.RULE_prealias);
		let _la: number;
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.METADATA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.match(BaseRqlParser.METADATA);
				this.state = 511;
				this.match(BaseRqlParser.DOT);
				}
				break;
			case BaseRqlParser.STRING:
			case BaseRqlParser.WORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 512;
					_la = this._input.LA(1);
					if (!(_la === BaseRqlParser.STRING || _la === BaseRqlParser.WORD)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BaseRqlParser.OP_Q) {
						{
						this.state = 513;
						this.asArray();
						}
					}

					this.state = 516;
					this.match(BaseRqlParser.DOT);
					}
					}
					this.state = 519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BaseRqlParser.STRING || _la === BaseRqlParser.WORD);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asArray(): AsArrayContext {
		let _localctx: AsArrayContext = new AsArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, BaseRqlParser.RULE_asArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(BaseRqlParser.OP_Q);
			this.state = 524;
			this.match(BaseRqlParser.CL_Q);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeMode(): IncludeModeContext {
		let _localctx: IncludeModeContext = new IncludeModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, BaseRqlParser.RULE_includeMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(BaseRqlParser.INCLUDE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, BaseRqlParser.RULE_includeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.includeMode();
			this.state = 531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TIMESERIES:
				{
				this.state = 529;
				this.tsIncludeTimeseriesFunction();
				}
				break;
			case BaseRqlParser.OP_Q:
			case BaseRqlParser.DOL:
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.FROM:
			case BaseRqlParser.GROUP_BY:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INCLUDE:
			case BaseRqlParser.INDEX:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LOAD:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.ORDER_BY:
			case BaseRqlParser.SELECT:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WHERE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.LIMIT:
			case BaseRqlParser.FUZZY:
			case BaseRqlParser.NUM:
			case BaseRqlParser.STRING:
			case BaseRqlParser.WORD:
				{
				this.state = 530;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 533;
				this.match(BaseRqlParser.COMMA);
				this.state = 536;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case BaseRqlParser.OP_Q:
				case BaseRqlParser.DOL:
				case BaseRqlParser.ALL:
				case BaseRqlParser.ALPHANUMERIC:
				case BaseRqlParser.AND:
				case BaseRqlParser.BETWEEN:
				case BaseRqlParser.DISTINCT:
				case BaseRqlParser.DOUBLE:
				case BaseRqlParser.ENDS_WITH:
				case BaseRqlParser.STARTS_WITH:
				case BaseRqlParser.FALSE:
				case BaseRqlParser.FACET:
				case BaseRqlParser.FROM:
				case BaseRqlParser.GROUP_BY:
				case BaseRqlParser.ID:
				case BaseRqlParser.IN:
				case BaseRqlParser.INCLUDE:
				case BaseRqlParser.INDEX:
				case BaseRqlParser.INTERSECT:
				case BaseRqlParser.LOAD:
				case BaseRqlParser.LONG:
				case BaseRqlParser.MATCH:
				case BaseRqlParser.METADATA:
				case BaseRqlParser.MORELIKETHIS:
				case BaseRqlParser.NOT:
				case BaseRqlParser.NULL:
				case BaseRqlParser.OR:
				case BaseRqlParser.ORDER_BY:
				case BaseRqlParser.SELECT:
				case BaseRqlParser.SORTING:
				case BaseRqlParser.STRING_W:
				case BaseRqlParser.TO:
				case BaseRqlParser.TRUE:
				case BaseRqlParser.WHERE:
				case BaseRqlParser.WITH:
				case BaseRqlParser.EXACT:
				case BaseRqlParser.BOOST:
				case BaseRqlParser.SEARCH:
				case BaseRqlParser.LIMIT:
				case BaseRqlParser.FUZZY:
				case BaseRqlParser.NUM:
				case BaseRqlParser.STRING:
				case BaseRqlParser.WORD:
					{
					this.state = 534;
					this.literal();
					}
					break;
				case BaseRqlParser.TIMESERIES:
					{
					this.state = 535;
					this.tsIncludeTimeseriesFunction();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitStatement(): LimitStatementContext {
		let _localctx: LimitStatementContext = new LimitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, BaseRqlParser.RULE_limitStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(BaseRqlParser.LIMIT);
			this.state = 544;
			this.variable();
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.COMMA || _la === BaseRqlParser.OFFSET) {
				{
				this.state = 545;
				_la = this._input.LA(1);
				if (!(_la === BaseRqlParser.COMMA || _la === BaseRqlParser.OFFSET)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 546;
				this.variable();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, BaseRqlParser.RULE_variable);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 549;
				_localctx._name = this.memberName();
				this.state = 550;
				this.match(BaseRqlParser.DOT);
				this.state = 551;
				_localctx._member = this.variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 553;
				_localctx._name = this.memberName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberName(): MemberNameContext {
		let _localctx: MemberNameContext = new MemberNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, BaseRqlParser.RULE_memberName);
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.DOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 556;
				this.cacheParam();
				}
				break;
			case BaseRqlParser.OP_Q:
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.FROM:
			case BaseRqlParser.GROUP_BY:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INCLUDE:
			case BaseRqlParser.INDEX:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LOAD:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.ORDER_BY:
			case BaseRqlParser.SELECT:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WHERE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.LIMIT:
			case BaseRqlParser.FUZZY:
			case BaseRqlParser.NUM:
			case BaseRqlParser.STRING:
			case BaseRqlParser.WORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.param();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, BaseRqlParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 560;
				this.match(BaseRqlParser.NUM);
				}
				break;

			case 2:
				{
				this.state = 561;
				this.match(BaseRqlParser.WORD);
				}
				break;

			case 3:
				{
				this.state = 562;
				this.date();
				}
				break;

			case 4:
				{
				this.state = 563;
				this.match(BaseRqlParser.STRING);
				}
				break;

			case 5:
				{
				this.state = 564;
				this.match(BaseRqlParser.ID);
				this.state = 565;
				this.match(BaseRqlParser.OP_PAR);
				this.state = 566;
				this.match(BaseRqlParser.CL_PAR);
				}
				break;

			case 6:
				{
				this.state = 567;
				this.identifiersAllNames();
				}
				break;
			}
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.asArray();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, BaseRqlParser.RULE_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.match(BaseRqlParser.DOL);
				}
				break;
			}
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 576;
				this.function();
				}
				break;

			case 2:
				{
				this.state = 577;
				this.variable();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cacheParam(): CacheParamContext {
		let _localctx: CacheParamContext = new CacheParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, BaseRqlParser.RULE_cacheParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(BaseRqlParser.DOL);
			this.state = 581;
			this.match(BaseRqlParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterWithOptionalAlias(): ParameterWithOptionalAliasContext {
		let _localctx: ParameterWithOptionalAliasContext = new ParameterWithOptionalAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, BaseRqlParser.RULE_parameterWithOptionalAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			_localctx._value = this.variableOrFunction();
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.AS) {
				{
				this.state = 584;
				_localctx._as = this.aliasWithRequiredAs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableOrFunction(): VariableOrFunctionContext {
		let _localctx: VariableOrFunctionContext = new VariableOrFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, BaseRqlParser.RULE_variableOrFunction);
		try {
			this.state = 589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 587;
				this.variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 588;
				this.function();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, BaseRqlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			_localctx._addr = this.variable();
			this.state = 592;
			this.match(BaseRqlParser.OP_PAR);
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BaseRqlParser.OP_Q) | (1 << BaseRqlParser.DOL) | (1 << BaseRqlParser.ALL) | (1 << BaseRqlParser.ALPHANUMERIC) | (1 << BaseRqlParser.AND) | (1 << BaseRqlParser.BETWEEN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BaseRqlParser.DISTINCT - 32)) | (1 << (BaseRqlParser.DOUBLE - 32)) | (1 << (BaseRqlParser.ENDS_WITH - 32)) | (1 << (BaseRqlParser.STARTS_WITH - 32)) | (1 << (BaseRqlParser.FALSE - 32)) | (1 << (BaseRqlParser.FACET - 32)) | (1 << (BaseRqlParser.FROM - 32)) | (1 << (BaseRqlParser.GROUP_BY - 32)) | (1 << (BaseRqlParser.ID - 32)) | (1 << (BaseRqlParser.IN - 32)) | (1 << (BaseRqlParser.INCLUDE - 32)) | (1 << (BaseRqlParser.INDEX - 32)) | (1 << (BaseRqlParser.INTERSECT - 32)) | (1 << (BaseRqlParser.LOAD - 32)) | (1 << (BaseRqlParser.LONG - 32)) | (1 << (BaseRqlParser.MATCH - 32)) | (1 << (BaseRqlParser.METADATA - 32)) | (1 << (BaseRqlParser.MORELIKETHIS - 32)) | (1 << (BaseRqlParser.NOT - 32)) | (1 << (BaseRqlParser.NULL - 32)) | (1 << (BaseRqlParser.OR - 32)) | (1 << (BaseRqlParser.ORDER_BY - 32)) | (1 << (BaseRqlParser.SELECT - 32)) | (1 << (BaseRqlParser.SORTING - 32)) | (1 << (BaseRqlParser.STRING_W - 32)) | (1 << (BaseRqlParser.TO - 32)) | (1 << (BaseRqlParser.TRUE - 32)) | (1 << (BaseRqlParser.WHERE - 32)) | (1 << (BaseRqlParser.WITH - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BaseRqlParser.EXACT - 64)) | (1 << (BaseRqlParser.BOOST - 64)) | (1 << (BaseRqlParser.SEARCH - 64)) | (1 << (BaseRqlParser.LIMIT - 64)) | (1 << (BaseRqlParser.FUZZY - 64)) | (1 << (BaseRqlParser.NUM - 64)) | (1 << (BaseRqlParser.STRING - 64)) | (1 << (BaseRqlParser.WORD - 64)))) !== 0)) {
				{
				this.state = 593;
				_localctx._args = this.arguments();
				}
			}

			this.state = 596;
			this.match(BaseRqlParser.CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, BaseRqlParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.literal();
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.COMMA) {
				{
				{
				this.state = 599;
				this.match(BaseRqlParser.COMMA);
				this.state = 600;
				this.literal();
				}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiersWithoutRootKeywords(): IdentifiersWithoutRootKeywordsContext {
		let _localctx: IdentifiersWithoutRootKeywordsContext = new IdentifiersWithoutRootKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, BaseRqlParser.RULE_identifiersWithoutRootKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (BaseRqlParser.ALL - 26)) | (1 << (BaseRqlParser.ALPHANUMERIC - 26)) | (1 << (BaseRqlParser.AND - 26)) | (1 << (BaseRqlParser.BETWEEN - 26)) | (1 << (BaseRqlParser.DISTINCT - 26)) | (1 << (BaseRqlParser.DOUBLE - 26)) | (1 << (BaseRqlParser.ENDS_WITH - 26)) | (1 << (BaseRqlParser.STARTS_WITH - 26)) | (1 << (BaseRqlParser.FALSE - 26)) | (1 << (BaseRqlParser.FACET - 26)) | (1 << (BaseRqlParser.ID - 26)) | (1 << (BaseRqlParser.IN - 26)) | (1 << (BaseRqlParser.INTERSECT - 26)) | (1 << (BaseRqlParser.LONG - 26)) | (1 << (BaseRqlParser.MATCH - 26)) | (1 << (BaseRqlParser.METADATA - 26)) | (1 << (BaseRqlParser.MORELIKETHIS - 26)) | (1 << (BaseRqlParser.NOT - 26)) | (1 << (BaseRqlParser.NULL - 26)) | (1 << (BaseRqlParser.OR - 26)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (BaseRqlParser.SORTING - 58)) | (1 << (BaseRqlParser.STRING_W - 58)) | (1 << (BaseRqlParser.TO - 58)) | (1 << (BaseRqlParser.TRUE - 58)) | (1 << (BaseRqlParser.WITH - 58)) | (1 << (BaseRqlParser.EXACT - 58)) | (1 << (BaseRqlParser.BOOST - 58)) | (1 << (BaseRqlParser.SEARCH - 58)) | (1 << (BaseRqlParser.FUZZY - 58)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootKeywords(): RootKeywordsContext {
		let _localctx: RootKeywordsContext = new RootKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, BaseRqlParser.RULE_rootKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (BaseRqlParser.FROM - 38)) | (1 << (BaseRqlParser.GROUP_BY - 38)) | (1 << (BaseRqlParser.INCLUDE - 38)) | (1 << (BaseRqlParser.INDEX - 38)) | (1 << (BaseRqlParser.LOAD - 38)) | (1 << (BaseRqlParser.ORDER_BY - 38)) | (1 << (BaseRqlParser.SELECT - 38)) | (1 << (BaseRqlParser.WHERE - 38)) | (1 << (BaseRqlParser.LIMIT - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiersAllNames(): IdentifiersAllNamesContext {
		let _localctx: IdentifiersAllNamesContext = new IdentifiersAllNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, BaseRqlParser.RULE_identifiersAllNames);
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.ALL:
			case BaseRqlParser.ALPHANUMERIC:
			case BaseRqlParser.AND:
			case BaseRqlParser.BETWEEN:
			case BaseRqlParser.DISTINCT:
			case BaseRqlParser.DOUBLE:
			case BaseRqlParser.ENDS_WITH:
			case BaseRqlParser.STARTS_WITH:
			case BaseRqlParser.FALSE:
			case BaseRqlParser.FACET:
			case BaseRqlParser.ID:
			case BaseRqlParser.IN:
			case BaseRqlParser.INTERSECT:
			case BaseRqlParser.LONG:
			case BaseRqlParser.MATCH:
			case BaseRqlParser.METADATA:
			case BaseRqlParser.MORELIKETHIS:
			case BaseRqlParser.NOT:
			case BaseRqlParser.NULL:
			case BaseRqlParser.OR:
			case BaseRqlParser.SORTING:
			case BaseRqlParser.STRING_W:
			case BaseRqlParser.TO:
			case BaseRqlParser.TRUE:
			case BaseRqlParser.WITH:
			case BaseRqlParser.EXACT:
			case BaseRqlParser.BOOST:
			case BaseRqlParser.SEARCH:
			case BaseRqlParser.FUZZY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 610;
				this.identifiersWithoutRootKeywords();
				}
				break;
			case BaseRqlParser.FROM:
			case BaseRqlParser.GROUP_BY:
			case BaseRqlParser.INCLUDE:
			case BaseRqlParser.INDEX:
			case BaseRqlParser.LOAD:
			case BaseRqlParser.ORDER_BY:
			case BaseRqlParser.SELECT:
			case BaseRqlParser.WHERE:
			case BaseRqlParser.LIMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 611;
				this.rootKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, BaseRqlParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(BaseRqlParser.OP_Q);
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.NULL:
				{
				this.state = 615;
				this.match(BaseRqlParser.NULL);
				}
				break;
			case BaseRqlParser.WORD:
				{
				this.state = 616;
				this.dateString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 619;
			this.match(BaseRqlParser.TO);
			this.state = 622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.NULL:
				{
				this.state = 620;
				this.match(BaseRqlParser.NULL);
				}
				break;
			case BaseRqlParser.WORD:
				{
				this.state = 621;
				this.dateString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 624;
			this.match(BaseRqlParser.CL_Q);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateString(): DateStringContext {
		let _localctx: DateStringContext = new DateStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, BaseRqlParser.RULE_dateString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(BaseRqlParser.WORD);
			this.state = 627;
			this.match(BaseRqlParser.DOT);
			this.state = 628;
			this.match(BaseRqlParser.NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsProg(): TsProgContext {
		let _localctx: TsProgContext = new TsProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, BaseRqlParser.RULE_tsProg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.match(BaseRqlParser.TIMESERIES);
			this.state = 631;
			this.tsQueryBody();
			this.state = 632;
			this.match(BaseRqlParser.TS_CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsIncludeTimeseriesFunction(): TsIncludeTimeseriesFunctionContext {
		let _localctx: TsIncludeTimeseriesFunctionContext = new TsIncludeTimeseriesFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, BaseRqlParser.RULE_tsIncludeTimeseriesFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(BaseRqlParser.TIMESERIES);
			this.state = 635;
			this.tsLiteral();
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 636;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 637;
				this.tsIncludeLiteral();
				}
				break;
			}
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_COMMA) {
				{
				this.state = 640;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 641;
				this.tsIncludeLiteral();
				}
			}

			this.state = 644;
			this.match(BaseRqlParser.TS_CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsIncludeLiteral(): TsIncludeLiteralContext {
		let _localctx: TsIncludeLiteralContext = new TsIncludeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, BaseRqlParser.RULE_tsIncludeLiteral);
		try {
			this.state = 648;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TS_DOL:
			case BaseRqlParser.TS_STRING:
			case BaseRqlParser.TS_WORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 646;
				this.tsLiteral();
				}
				break;
			case BaseRqlParser.TS_FIRST:
			case BaseRqlParser.TS_LAST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 647;
				this.tsIncludeSpecialMethod();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsIncludeSpecialMethod(): TsIncludeSpecialMethodContext {
		let _localctx: TsIncludeSpecialMethodContext = new TsIncludeSpecialMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, BaseRqlParser.RULE_tsIncludeSpecialMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			_la = this._input.LA(1);
			if (!(_la === BaseRqlParser.TS_FIRST || _la === BaseRqlParser.TS_LAST)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 651;
			this.match(BaseRqlParser.TS_OP_PAR);
			this.state = 652;
			this.match(BaseRqlParser.TS_NUM);
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_COMMA) {
				{
				this.state = 653;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 654;
				this.match(BaseRqlParser.TS_STRING);
				}
			}

			this.state = 657;
			this.match(BaseRqlParser.TS_CL_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsQueryBody(): TsQueryBodyContext {
		let _localctx: TsQueryBodyContext = new TsQueryBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, BaseRqlParser.RULE_tsQueryBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			_localctx._from = this.tsFROM();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (BaseRqlParser.TS_BETWEEN - 96)) | (1 << (BaseRqlParser.TS_FIRST - 96)) | (1 << (BaseRqlParser.TS_LAST - 96)))) !== 0)) {
				{
				this.state = 660;
				_localctx._range = this.tsTimeRangeStatement();
				}
			}

			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_LOAD) {
				{
				this.state = 663;
				_localctx._load = this.tsLoadStatement();
				}
			}

			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_WHERE) {
				{
				this.state = 666;
				_localctx._where = this.tsWHERE();
				}
			}

			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_GROUPBY) {
				{
				this.state = 669;
				_localctx._groupBy = this.tsGroupBy();
				}
			}

			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_SELECT) {
				{
				this.state = 672;
				_localctx._select = this.tsSelect();
				}
			}

			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_SCALE) {
				{
				this.state = 675;
				_localctx._scale = this.tsSelectScaleProjection();
				}
			}

			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_OFFSET) {
				{
				this.state = 678;
				_localctx._offset = this.tsOffset();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsOffset(): TsOffsetContext {
		let _localctx: TsOffsetContext = new TsOffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, BaseRqlParser.RULE_tsOffset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(BaseRqlParser.TS_OFFSET);
			this.state = 682;
			this.match(BaseRqlParser.TS_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsFunction(): TsFunctionContext {
		let _localctx: TsFunctionContext = new TsFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, BaseRqlParser.RULE_tsFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(BaseRqlParser.TIMESERIES_FUNCTION_DECLARATION);
			this.state = 685;
			this.match(BaseRqlParser.TS_WORD);
			this.state = 686;
			this.match(BaseRqlParser.TS_OP_PAR);
			this.state = 687;
			this.match(BaseRqlParser.TS_WORD);
			this.state = 692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.TS_COMMA) {
				{
				{
				this.state = 688;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 689;
				this.match(BaseRqlParser.TS_WORD);
				}
				}
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 695;
			this.match(BaseRqlParser.TS_CL_PAR);
			this.state = 696;
			this.match(BaseRqlParser.TS_OP_C);
			this.state = 697;
			_localctx._body = this.tsQueryBody();
			this.state = 698;
			this.match(BaseRqlParser.TS_CL_C);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsTimeRangeStatement(): TsTimeRangeStatementContext {
		let _localctx: TsTimeRangeStatementContext = new TsTimeRangeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, BaseRqlParser.RULE_tsTimeRangeStatement);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 700;
				this.tsBetween();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				_localctx._first = this.tsTimeRangeFirst();
				this.state = 702;
				_localctx._last = this.tsTimeRangeLast();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 704;
				_localctx._first = this.tsTimeRangeFirst();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 705;
				_localctx._last = this.tsTimeRangeLast();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsLoadStatement(): TsLoadStatementContext {
		let _localctx: TsLoadStatementContext = new TsLoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, BaseRqlParser.RULE_tsLoadStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(BaseRqlParser.TS_LOAD);
			this.state = 709;
			this.tsAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsAlias(): TsAliasContext {
		let _localctx: TsAliasContext = new TsAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, BaseRqlParser.RULE_tsAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(BaseRqlParser.TS_AS);
			this.state = 712;
			_localctx._alias_text = this.tsLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsFROM(): TsFROMContext {
		let _localctx: TsFROMContext = new TsFROMContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, BaseRqlParser.RULE_tsFROM);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(BaseRqlParser.TS_FROM);
			this.state = 715;
			_localctx._name = this.tsCollectionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsWHERE(): TsWHEREContext {
		let _localctx: TsWHEREContext = new TsWHEREContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, BaseRqlParser.RULE_tsWHERE);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(BaseRqlParser.TS_WHERE);
			this.state = 718;
			this.tsExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public tsExpr(): TsExprContext;
	public tsExpr(_p: number): TsExprContext;
	// @RuleVersion(0)
	public tsExpr(_p?: number): TsExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TsExprContext = new TsExprContext(this._ctx, _parentState);
		let _prevctx: TsExprContext = _localctx;
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, BaseRqlParser.RULE_tsExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TS_OP_PAR:
				{
				_localctx = new TsOpParContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 721;
				this.match(BaseRqlParser.TS_OP_PAR);
				this.state = 722;
				this.tsExpr(0);
				this.state = 723;
				this.match(BaseRqlParser.TS_CL_PAR);
				}
				break;
			case BaseRqlParser.TS_TRUE:
				{
				_localctx = new TsBooleanExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 725;
				this.match(BaseRqlParser.TS_TRUE);
				this.state = 726;
				this.match(BaseRqlParser.TS_AND);
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BaseRqlParser.TS_NOT) {
					{
					this.state = 727;
					this.match(BaseRqlParser.TS_NOT);
					}
				}

				this.state = 730;
				this.tsExpr(2);
				}
				break;
			case BaseRqlParser.TS_DOL:
			case BaseRqlParser.TS_STRING:
			case BaseRqlParser.TS_WORD:
				{
				_localctx = new TsLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 731;
				this.tsLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 743;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 741;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
					case 1:
						{
						_localctx = new TsMathExpressionContext(new TsExprContext(_parentctx, _parentState));
						(_localctx as TsMathExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_tsExpr);
						this.state = 734;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 735;
						this.match(BaseRqlParser.TS_MATH);
						this.state = 736;
						(_localctx as TsMathExpressionContext)._right = this.tsExpr(6);
						}
						break;

					case 2:
						{
						_localctx = new TsBinaryExpressionContext(new TsExprContext(_parentctx, _parentState));
						(_localctx as TsBinaryExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BaseRqlParser.RULE_tsExpr);
						this.state = 737;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 738;
						this.tsBinary();
						this.state = 739;
						(_localctx as TsBinaryExpressionContext)._right = this.tsExpr(5);
						}
						break;
					}
					}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsBetween(): TsBetweenContext {
		let _localctx: TsBetweenContext = new TsBetweenContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, BaseRqlParser.RULE_tsBetween);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.match(BaseRqlParser.TS_BETWEEN);
			this.state = 747;
			_localctx._from = this.tsLiteral();
			this.state = 748;
			this.match(BaseRqlParser.TS_AND);
			this.state = 749;
			_localctx._to = this.tsLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsBinary(): TsBinaryContext {
		let _localctx: TsBinaryContext = new TsBinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, BaseRqlParser.RULE_tsBinary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			_la = this._input.LA(1);
			if (!(_la === BaseRqlParser.TS_OR || _la === BaseRqlParser.TS_AND)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsLiteral(): TsLiteralContext {
		let _localctx: TsLiteralContext = new TsLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, BaseRqlParser.RULE_tsLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.state = 776;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TS_DOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.match(BaseRqlParser.TS_DOL);
				this.state = 757;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case BaseRqlParser.TS_WORD:
					{
					this.state = 754;
					this.match(BaseRqlParser.TS_WORD);
					}
					break;
				case BaseRqlParser.TS_NUM:
					{
					this.state = 755;
					this.match(BaseRqlParser.TS_NUM);
					}
					break;
				case BaseRqlParser.TS_OR:
				case BaseRqlParser.TS_AND:
				case BaseRqlParser.TS_FROM:
				case BaseRqlParser.TS_WHERE:
				case BaseRqlParser.TS_GROUPBY:
				case BaseRqlParser.TS_TIMERANGE:
					{
					this.state = 756;
					this.tsIdentifiers();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case BaseRqlParser.TS_STRING:
			case BaseRqlParser.TS_WORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				_la = this._input.LA(1);
				if (!(_la === BaseRqlParser.TS_STRING || _la === BaseRqlParser.TS_WORD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 763;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 760;
					this.match(BaseRqlParser.TS_OP_Q);
					this.state = 761;
					this.match(BaseRqlParser.TS_NUM);
					this.state = 762;
					this.match(BaseRqlParser.TS_CL_Q);
					}
					break;
				}
				this.state = 773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 765;
						this.match(BaseRqlParser.TS_DOT);
						this.state = 769;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case BaseRqlParser.TS_WORD:
							{
							this.state = 766;
							this.match(BaseRqlParser.TS_WORD);
							}
							break;
						case BaseRqlParser.TS_STRING:
							{
							this.state = 767;
							this.match(BaseRqlParser.TS_STRING);
							}
							break;
						case BaseRqlParser.TS_OR:
						case BaseRqlParser.TS_AND:
						case BaseRqlParser.TS_FROM:
						case BaseRqlParser.TS_WHERE:
						case BaseRqlParser.TS_GROUPBY:
						case BaseRqlParser.TS_TIMERANGE:
							{
							this.state = 768;
							this.tsIdentifiers();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsTimeRangeFirst(): TsTimeRangeFirstContext {
		let _localctx: TsTimeRangeFirstContext = new TsTimeRangeFirstContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, BaseRqlParser.RULE_tsTimeRangeFirst);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(BaseRqlParser.TS_FIRST);
			this.state = 779;
			_localctx._num = this.match(BaseRqlParser.TS_NUM);
			this.state = 780;
			_localctx._size = this.match(BaseRqlParser.TS_TIMERANGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsTimeRangeLast(): TsTimeRangeLastContext {
		let _localctx: TsTimeRangeLastContext = new TsTimeRangeLastContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, BaseRqlParser.RULE_tsTimeRangeLast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(BaseRqlParser.TS_LAST);
			this.state = 783;
			_localctx._num = this.match(BaseRqlParser.TS_NUM);
			this.state = 784;
			_localctx._size = this.match(BaseRqlParser.TS_TIMERANGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsCollectionName(): TsCollectionNameContext {
		let _localctx: TsCollectionNameContext = new TsCollectionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, BaseRqlParser.RULE_tsCollectionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TS_WORD:
				{
				this.state = 786;
				this.match(BaseRqlParser.TS_WORD);
				}
				break;
			case BaseRqlParser.TS_STRING:
				{
				this.state = 787;
				this.match(BaseRqlParser.TS_STRING);
				}
				break;
			case BaseRqlParser.TS_OR:
			case BaseRqlParser.TS_AND:
			case BaseRqlParser.TS_FROM:
			case BaseRqlParser.TS_WHERE:
			case BaseRqlParser.TS_GROUPBY:
			case BaseRqlParser.TS_TIMERANGE:
				{
				this.state = 788;
				this.tsIdentifiers();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_DOT) {
				{
				this.state = 791;
				this.match(BaseRqlParser.TS_DOT);
				this.state = 792;
				this.tsCollectionName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsGroupBy(): TsGroupByContext {
		let _localctx: TsGroupByContext = new TsGroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, BaseRqlParser.RULE_tsGroupBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(BaseRqlParser.TS_GROUPBY);
			this.state = 796;
			_localctx._name = this.tsCollectionName();
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.TS_COMMA) {
				{
				{
				this.state = 797;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 798;
				this.tsCollectionName();
				}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.TS_WITH) {
				{
				this.state = 804;
				this.match(BaseRqlParser.TS_WITH);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsSelect(): TsSelectContext {
		let _localctx: TsSelectContext = new TsSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, BaseRqlParser.RULE_tsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(BaseRqlParser.TS_SELECT);
			this.state = 808;
			_localctx._field = this.tsSelectVariable();
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BaseRqlParser.TS_COMMA) {
				{
				{
				this.state = 809;
				this.match(BaseRqlParser.TS_COMMA);
				this.state = 810;
				this.tsSelectVariable();
				}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsSelectScaleProjection(): TsSelectScaleProjectionContext {
		let _localctx: TsSelectScaleProjectionContext = new TsSelectScaleProjectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, BaseRqlParser.RULE_tsSelectScaleProjection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(BaseRqlParser.TS_SCALE);
			this.state = 817;
			this.match(BaseRqlParser.TS_NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsSelectVariable(): TsSelectVariableContext {
		let _localctx: TsSelectVariableContext = new TsSelectVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, BaseRqlParser.RULE_tsSelectVariable);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BaseRqlParser.TS_METHOD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 819;
				this.match(BaseRqlParser.TS_METHOD);
				}
				break;
			case BaseRqlParser.TS_DOL:
			case BaseRqlParser.TS_STRING:
			case BaseRqlParser.TS_WORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 820;
				this.tsLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tsIdentifiers(): TsIdentifiersContext {
		let _localctx: TsIdentifiersContext = new TsIdentifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, BaseRqlParser.RULE_tsIdentifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (BaseRqlParser.TS_OR - 88)) | (1 << (BaseRqlParser.TS_AND - 88)) | (1 << (BaseRqlParser.TS_FROM - 88)) | (1 << (BaseRqlParser.TS_WHERE - 88)) | (1 << (BaseRqlParser.TS_GROUPBY - 88)) | (1 << (BaseRqlParser.TS_TIMERANGE - 88)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateBody(): UpdateBodyContext {
		let _localctx: UpdateBodyContext = new UpdateBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, BaseRqlParser.RULE_updateBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(BaseRqlParser.US_OP);
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BaseRqlParser.US_DATA) {
				{
				this.state = 826;
				this.match(BaseRqlParser.US_DATA);
				}
			}

			this.state = 829;
			this.match(BaseRqlParser.US_CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 20:
			return this.specialParam_sempred(_localctx as SpecialParamContext, predIndex);

		case 68:
			return this.tsExpr_sempred(_localctx as TsExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private specialParam_sempred(_localctx: SpecialParamContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private tsExpr_sempred(_localctx: TsExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03|\u0342\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x07\x02\xA6\n\x02\f\x02\x0E\x02\xA9" +
		"\v\x02\x03\x02\x03\x02\x05\x02\xAD\n\x02\x03\x02\x05\x02\xB0\n\x02\x03" +
		"\x02\x05\x02\xB3\n\x02\x03\x02\x05\x02\xB6\n\x02\x03\x02\x05\x02\xB9\n" +
		"\x02\x03\x02\x05\x02\xBC\n\x02\x03\x02\x05\x02\xBF\n\x02\x03\x02\x05\x02" +
		"\xC2\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xC8\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xCD\n\x04\f\x04\x0E\x04\xD0\v\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xDA\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE1\n\x06\x05\x06\xE3\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xE8\n\x07\x03\b\x03\b\x03\b\x05\b\xED" +
		"\n\b\x03\t\x05\t\xF0\n\t\x03\t\x03\t\x05\t\xF4\n\t\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\xFC\n\v\f\v\x0E\v\xFF\v\v\x03\f\x03\f\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u011C\n\x0F\x03\x0F\x05" +
		"\x0F\u011F\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0125\n\x0F\f" +
		"\x0F\x0E\x0F\u0128\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\u0130\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0136\n\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u013D\n\x12\f\x12\x0E" +
		"\x12\u0140\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u014E\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0153\n\x14\x07\x14\u0155\n\x14\f\x14\x0E\x14\u0158" +
		"\v\x14\x05\x14\u015A\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0171\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x07\x16\u017F\n\x16\f\x16\x0E\x16\u0182\v\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u018A\n\x18\f" +
		"\x18\x0E\x18\u018D\v\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0198\n\x1B\f\x1B\x0E\x1B\u019B\v\x1B" +
		"\x03\x1C\x03\x1C\x05\x1C\u019F\n\x1C\x03\x1C\x05\x1C\u01A2\n\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"!\x03!\x05!\u01B1\n!\x03!\x03!\x05!\u01B5\n!\x03!\x03!\x03!\x07!\u01BA" +
		"\n!\f!\x0E!\u01BD\v!\x03!\x05!\u01C0\n!\x03!\x03!\x07!\u01C4\n!\f!\x0E" +
		"!\u01C7\v!\x03!\x03!\x05!\u01CB\n!\x05!\u01CD\n!\x03\"\x03\"\x03\"\x05" +
		"\"\u01D2\n\"\x03\"\x05\"\u01D5\n\"\x03#\x03#\x03#\x03#\x05#\u01DB\n#\x03" +
		"#\x03#\x07#\u01DF\n#\f#\x0E#\u01E2\v#\x03#\x03#\x03#\x07#\u01E7\n#\f#" +
		"\x0E#\u01EA\v#\x03#\x03#\x03$\x03$\x07$\u01F0\n$\f$\x0E$\u01F3\v$\x03" +
		"$\x03$\x03%\x03%\x03%\x05%\u01FA\n%\x03&\x03&\x03&\x05&\u01FF\n&\x03\'" +
		"\x03\'\x03\'\x03\'\x05\'\u0205\n\'\x03\'\x06\'\u0208\n\'\r\'\x0E\'\u0209" +
		"\x05\'\u020C\n\'\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x05*\u0216\n" +
		"*\x03*\x03*\x03*\x05*\u021B\n*\x07*\u021D\n*\f*\x0E*\u0220\v*\x03+\x03" +
		"+\x03+\x03+\x05+\u0226\n+\x03,\x03,\x03,\x03,\x03,\x05,\u022D\n,\x03-" +
		"\x03-\x05-\u0231\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u023B" +
		"\n.\x03.\x05.\u023E\n.\x03/\x05/\u0241\n/\x03/\x03/\x05/\u0245\n/\x03" +
		"0\x030\x030\x031\x031\x051\u024C\n1\x032\x032\x052\u0250\n2\x033\x033" +
		"\x033\x053\u0255\n3\x033\x033\x034\x034\x034\x074\u025C\n4\f4\x0E4\u025F" +
		"\v4\x035\x035\x036\x036\x037\x037\x057\u0267\n7\x038\x038\x038\x058\u026C" +
		"\n8\x038\x038\x038\x058\u0271\n8\x038\x038\x039\x039\x039\x039\x03:\x03" +
		":\x03:\x03:\x03;\x03;\x03;\x03;\x05;\u0281\n;\x03;\x03;\x05;\u0285\n;" +
		"\x03;\x03;\x03<\x03<\x05<\u028B\n<\x03=\x03=\x03=\x03=\x03=\x05=\u0292" +
		"\n=\x03=\x03=\x03>\x03>\x05>\u0298\n>\x03>\x05>\u029B\n>\x03>\x05>\u029E" +
		"\n>\x03>\x05>\u02A1\n>\x03>\x05>\u02A4\n>\x03>\x05>\u02A7\n>\x03>\x05" +
		">\u02AA\n>\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u02B5\n@" +
		"\f@\x0E@\u02B8\v@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x05A\u02C5\nA\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x03D\x03E\x03" +
		"E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u02DB\nF\x03F\x03" +
		"F\x05F\u02DF\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u02E8\nF\fF\x0E" +
		"F\u02EB\vF\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03I\x03I\x03I\x03I\x05" +
		"I\u02F8\nI\x03I\x03I\x03I\x03I\x05I\u02FE\nI\x03I\x03I\x03I\x03I\x05I" +
		"\u0304\nI\x07I\u0306\nI\fI\x0EI\u0309\vI\x05I\u030B\nI\x03J\x03J\x03J" +
		"\x03J\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x05L\u0318\nL\x03L\x03L\x05L" +
		"\u031C\nL\x03M\x03M\x03M\x03M\x07M\u0322\nM\fM\x0EM\u0325\vM\x03M\x05" +
		"M\u0328\nM\x03N\x03N\x03N\x03N\x07N\u032E\nN\fN\x0EN\u0331\vN\x03O\x03" +
		"O\x03O\x03P\x03P\x05P\u0338\nP\x03Q\x03Q\x03R\x03R\x05R\u033E\nR\x03R" +
		"\x03R\x03R\x02\x02\x05\x1C*\x8AS\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
		"\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\x02\f\t\x02$%\'\'**//44BDFF\x06\x02" +
		"\x1E\x1E##11==\x04\x02KKMM\x04\x02\x06\x0699\v\x02\x1C\x1C\x1E\x1F!\'" +
		"*+//17<?ADFF\n\x02(),,..0088::@@EE\x03\x02cd\x04\x02ZZ^^\x04\x02mmoo\x05" +
		"\x02ZZ^aff\x02\u0376\x02\xA7\x03\x02\x02\x02\x04\xC7\x03\x02\x02\x02\x06" +
		"\xC9\x03\x02\x02\x02\b\xD3\x03\x02\x02\x02\n\xE2\x03\x02\x02\x02\f\xE7" +
		"\x03\x02\x02\x02\x0E\xEC\x03\x02\x02\x02\x10\xEF\x03\x02\x02\x02\x12\xF5" +
		"\x03\x02\x02\x02\x14\xF7\x03\x02\x02\x02\x16\u0100\x03\x02\x02\x02\x18" +
		"\u0102\x03\x02\x02\x02\x1A\u0104\x03\x02\x02\x02\x1C\u011E\x03\x02\x02" +
		"\x02\x1E\u012F\x03\x02\x02\x02 \u0131\x03\x02\x02\x02\"\u0133\x03\x02" +
		"\x02\x02$\u0143\x03\x02\x02\x02&\u0149\x03\x02\x02\x02(\u015D\x03\x02" +
		"\x02\x02*\u0170\x03\x02\x02\x02,\u0183\x03\x02\x02\x02.\u0185\x03\x02" +
		"\x02\x020\u018E\x03\x02\x02\x022\u0191\x03\x02\x02\x024\u0193\x03\x02" +
		"\x02\x026\u019C\x03\x02\x02\x028\u01A3\x03\x02\x02\x02:\u01A6\x03\x02" +
		"\x02\x02<\u01A8\x03\x02\x02\x02>\u01AA\x03\x02\x02\x02@\u01CC\x03\x02" +
		"\x02\x02B\u01D1\x03\x02\x02\x02D\u01D6\x03\x02\x02\x02F\u01ED\x03\x02" +
		"\x02\x02H\u01F6\x03\x02\x02\x02J\u01FE\x03\x02\x02\x02L\u020B\x03\x02" +
		"\x02\x02N\u020D\x03\x02\x02\x02P\u0210\x03\x02\x02\x02R\u0212\x03\x02" +
		"\x02\x02T\u0221\x03\x02\x02\x02V\u022C\x03\x02\x02\x02X\u0230\x03\x02" +
		"\x02\x02Z\u023A\x03\x02\x02\x02\\\u0240\x03\x02\x02\x02^\u0246\x03\x02" +
		"\x02\x02`\u0249\x03\x02\x02\x02b\u024F\x03\x02\x02\x02d\u0251\x03\x02" +
		"\x02\x02f\u0258\x03\x02\x02\x02h\u0260\x03\x02\x02\x02j\u0262\x03\x02" +
		"\x02\x02l\u0266\x03\x02\x02\x02n\u0268\x03\x02\x02\x02p\u0274\x03\x02" +
		"\x02\x02r\u0278\x03\x02\x02\x02t\u027C\x03\x02\x02\x02v\u028A\x03\x02" +
		"\x02\x02x\u028C\x03\x02\x02\x02z\u0295\x03\x02\x02\x02|\u02AB\x03\x02" +
		"\x02\x02~\u02AE\x03\x02\x02\x02\x80\u02C4\x03\x02\x02\x02\x82\u02C6\x03" +
		"\x02\x02\x02\x84\u02C9\x03\x02\x02\x02\x86\u02CC\x03\x02\x02\x02\x88\u02CF" +
		"\x03\x02\x02\x02\x8A\u02DE\x03\x02\x02\x02\x8C\u02EC\x03\x02\x02\x02\x8E" +
		"\u02F1\x03\x02\x02\x02\x90\u030A\x03\x02\x02\x02\x92\u030C\x03\x02\x02" +
		"\x02\x94\u0310\x03\x02\x02\x02\x96\u0317\x03\x02\x02\x02\x98\u031D\x03" +
		"\x02\x02\x02\x9A\u0329\x03\x02\x02\x02\x9C\u0332\x03\x02\x02\x02\x9E\u0337" +
		"\x03\x02\x02\x02\xA0\u0339\x03\x02\x02\x02\xA2\u033B\x03\x02\x02\x02\xA4" +
		"\xA6\x05\x04\x03\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7" +
		"\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9" +
		"\xA7\x03\x02\x02\x02\xAA\xAC\x05\n\x06\x02\xAB\xAD\x05\x14\v\x02\xAC\xAB" +
		"\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xB0" +
		"\x05\x1A\x0E\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2" +
		"\x03\x02\x02\x02\xB1\xB3\x05.\x18\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3" +
		"\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB6\x054\x1B\x02\xB5\xB4" +
		"\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB9" +
		"\x05\x06\x04\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB" +
		"\x03\x02\x02\x02\xBA\xBC\x05@!\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03" +
		"\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBF\x05R*\x02\xBE\xBD\x03\x02" +
		"\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xC2\x05T" +
		"+\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC4\x07\x02\x02\x03\xC4\x03\x03\x02\x02\x02\xC5\xC8\x05D" +
		"#\x02\xC6\xC8\x05~@\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02" +
		"\xC8\x05\x03\x02\x02\x02\xC9\xCA\x07-\x02\x02\xCA\xCE\x07q\x02\x02\xCB" +
		"\xCD\x05\xA2R\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE" +
		"\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0" +
		"\xCE\x03\x02\x02\x02\xD1\xD2\x07r\x02\x02\xD2\x07\x03\x02\x02\x02\xD3" +
		"\xD4\x07(\x02\x02\xD4\t\x03\x02\x02\x02\xD5\xD6\x05\b\x05\x02\xD6\xD7" +
		"\x07.\x02\x02\xD7\xD9\x05\f\x07\x02\xD8\xDA\x05\x10\t\x02\xD9\xD8\x03" +
		"\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xE3\x03\x02\x02\x02\xDB\xDC\x07" +
		"(\x02\x02\xDC\xE3\x07\x1D\x02\x02\xDD\xDE\x05\b\x05\x02\xDE\xE0\x05\x0E" +
		"\b\x02\xDF\xE1\x05\x10\t\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
		"\x02\xE1\xE3\x03\x02\x02\x02\xE2\xD5\x03\x02\x02\x02\xE2\xDB\x03\x02\x02" +
		"\x02\xE2\xDD\x03\x02\x02\x02\xE3\v\x03\x02\x02\x02\xE4\xE8\x07M\x02\x02" +
		"\xE5\xE8\x07K\x02\x02\xE6\xE8\x05h5\x02\xE7\xE4\x03\x02\x02\x02\xE7\xE5" +
		"\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\r\x03\x02\x02\x02\xE9\xED" +
		"\x07M\x02\x02\xEA\xED\x07K\x02\x02\xEB\xED\x05h5\x02\xEC\xE9\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\x0F\x03\x02\x02" +
		"\x02\xEE\xF0\x07 \x02\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x05J&\x02\xF2\xF4\x05N(\x02\xF3\xF2" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\x11\x03\x02\x02\x02\xF5\xF6" +
		"\x07)\x02\x02\xF6\x13\x03\x02\x02\x02\xF7\xF8\x05\x12\n\x02\xF8\xFD\x05" +
		"`1\x02\xF9\xFA\x07\x06\x02\x02\xFA\xFC\x05`1\x02\xFB\xF9\x03\x02\x02\x02" +
		"\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
		"\xFE\x15\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x03\x02\x02" +
		"\x02\u0101\x17\x03\x02\x02\x02\u0102\u0103\x07@\x02\x02\u0103\x19\x03" +
		"\x02\x02\x02\u0104\u0105\x05\x18\r\x02\u0105\u0106\x05\x1C\x0F\x02\u0106" +
		"\x1B\x03\x02\x02\x02\u0107\u0108\b\x0F\x01\x02\u0108\u0109\x07\v\x02\x02" +
		"\u0109\u010A\x05\x1C\x0F\x02\u010A\u010B\x07\x04\x02\x02\u010B\u011F\x03" +
		"\x02\x02\x02\u010C\u010D\x05 \x11\x02\u010D\u010E\x07\b\x02\x02\u010E" +
		"\u010F\x05 \x11\x02\u010F\u011F\x03\x02\x02\x02\u0110\u0111\x05 \x11\x02" +
		"\u0111\u0112\x07\t\x02\x02\u0112\u0113\x05 \x11\x02\u0113\u011F\x03\x02" +
		"\x02\x02\u0114\u011F\x05&\x14\x02\u0115\u011F\x05\"\x12\x02\u0116\u011F" +
		"\x05$\x13\x02\u0117\u011F\x05d3\x02\u0118\u0119\x07?\x02\x02\u0119\u011B" +
		"\x07\x1F\x02\x02\u011A\u011C\x075\x02\x02\u011B\u011A\x03\x02\x02\x02" +
		"\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x05" +
		"\x1C\x0F\x03\u011E\u0107\x03\x02\x02\x02\u011E\u010C\x03\x02\x02\x02\u011E" +
		"\u0110\x03\x02\x02\x02\u011E\u0114\x03\x02\x02\x02\u011E\u0115\x03\x02" +
		"\x02\x02\u011E\u0116\x03\x02\x02\x02\u011E\u0117\x03\x02\x02\x02\u011E" +
		"\u0118\x03\x02\x02\x02\u011F\u0126\x03\x02\x02\x02\u0120\u0121\f\v\x02" +
		"\x02\u0121\u0122\x05\x1E\x10\x02\u0122\u0123\x05\x1C\x0F\f\u0123\u0125" +
		"\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02" +
		"\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\x1D\x03" +
		"\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012A\x07\x1F\x02\x02\u012A" +
		"\u0130\x075\x02\x02\u012B\u012C\x077\x02\x02\u012C\u0130\x075\x02\x02" +
		"\u012D\u0130\x07\x1F\x02\x02\u012E\u0130\x077\x02\x02\u012F\u0129\x03" +
		"\x02\x02\x02\u012F\u012B\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F" +
		"\u012E\x03\x02\x02\x02\u0130\x1F\x03\x02\x02\x02\u0131\u0132\x05\\/\x02" +
		"\u0132!\x03\x02\x02\x02\u0133\u0135\x05\\/\x02\u0134\u0136\x07\x1C\x02" +
		"\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137" +
		"\x03\x02\x02\x02\u0137\u0138\x07+\x02\x02\u0138\u0139\x07\v\x02\x02\u0139" +
		"\u013E\x05\\/\x02\u013A\u013B\x07\x06\x02\x02\u013B\u013D\x05\\/\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0141\u0142\x07\x04\x02\x02\u0142#\x03\x02\x02" +
		"\x02\u0143\u0144\x05\\/\x02\u0144\u0145\x07!\x02\x02\u0145\u0146\x05\\" +
		"/\x02\u0146\u0147\x07\x1F\x02\x02\u0147\u0148\x05\\/\x02\u0148%\x03\x02" +
		"\x02\x02\u0149\u014A\x05(\x15\x02\u014A\u0159\x07\v\x02\x02\u014B\u014D" +
		"\x05*\x16\x02\u014C\u014E\x05H%\x02\u014D\u014C\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\u0156\x03\x02\x02\x02\u014F\u0150\x07\x06" +
		"\x02\x02\u0150\u0152\x05*\x16\x02\u0151\u0153\x05H%\x02\u0152\u0151\x03" +
		"\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154" +
		"\u014F\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158" +
		"\u0156\x03\x02\x02\x02\u0159\u014B\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x07\x04\x02\x02\u015C" +
		"\'\x03\x02\x02\x02\u015D\u015E\t\x02\x02\x02\u015E)\x03\x02\x02\x02\u015F" +
		"\u0160\b\x16\x01\x02\u0160\u0161\x07\v\x02\x02\u0161\u0162\x05*\x16\x02" +
		"\u0162\u0163\x07\x04\x02\x02\u0163\u0171\x03\x02\x02\x02\u0164\u0165\x05" +
		"V,\x02\u0165\u0166\x07!\x02\x02\u0166\u0167\x05*\x16\x0E\u0167\u0171\x03" +
		"\x02\x02\x02\u0168\u0171\x05\"\x12\x02\u0169\u0171\x05$\x13\x02\u016A" +
		"\u0171\x05&\x14\x02\u016B\u0171\x05n8\x02\u016C\u0171\x05d3\x02\u016D" +
		"\u0171\x05V,\x02\u016E\u0171\x05l7\x02\u016F\u0171\x07J\x02\x02\u0170" +
		"\u015F\x03\x02\x02\x02\u0170\u0164\x03\x02\x02\x02\u0170\u0168\x03\x02" +
		"\x02\x02\u0170\u0169\x03\x02\x02\x02\u0170\u016A\x03\x02\x02\x02\u0170" +
		"\u016B\x03\x02\x02\x02\u0170\u016C\x03\x02\x02\x02\u0170\u016D\x03\x02" +
		"\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171" +
		"\u0180\x03\x02\x02\x02\u0172\u0173\f\x0F\x02\x02\u0173\u0174\x07\b\x02" +
		"\x02\u0174\u017F\x05*\x16\x10\u0175\u0176\f\r\x02\x02\u0176\u0177\x07" +
		"\x1F\x02\x02\u0177\u017F\x05*\x16\x0E\u0178\u0179\f\f\x02\x02\u0179\u017A" +
		"\x077\x02\x02\u017A\u017F\x05*\x16\r\u017B\u017C\f\v\x02\x02\u017C\u017D" +
		"\x07\t\x02\x02\u017D\u017F\x05*\x16\f\u017E\u0172\x03\x02\x02\x02\u017E" +
		"\u0175\x03\x02\x02\x02\u017E\u0178\x03\x02\x02\x02\u017E\u017B\x03\x02" +
		"\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180" +
		"\u0181\x03\x02\x02\x02\u0181+\x03\x02\x02\x02\u0182\u0180\x03\x02\x02" +
		"\x02\u0183\u0184\x070\x02\x02\u0184-\x03\x02\x02\x02\u0185\u0186\x05," +
		"\x17\x02\u0186\u018B\x050\x19\x02\u0187\u0188\x07\x06\x02\x02\u0188\u018A" +
		"\x050\x19\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02" +
		"\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C/\x03\x02" +
		"\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u018F\x05V,\x02\u018F\u0190" +
		"\x05\x10\t\x02\u01901\x03\x02\x02\x02\u0191\u0192\x078\x02\x02\u01923" +
		"\x03\x02\x02\x02\u0193\u0194\x052\x1A\x02\u0194\u0199\x056\x1C\x02\u0195" +
		"\u0196\x07\x06\x02\x02\u0196\u0198\x056\x1C\x02\u0197\u0195\x03\x02\x02" +
		"\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A" +
		"\x03\x02\x02\x02\u019A5\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C" +
		"\u019E\x05\\/\x02\u019D\u019F\x058\x1D\x02\u019E\u019D\x03\x02\x02\x02" +
		"\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u01A2\x05" +
		"<\x1F\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2" +
		"7\x03\x02\x02\x02\u01A3\u01A4\x07 \x02\x02\u01A4\u01A5\x05:\x1E\x02\u01A5" +
		"9\x03\x02\x02\x02\u01A6\u01A7\t\x03\x02\x02\u01A7;\x03\x02\x02\x02\u01A8" +
		"\u01A9\x07<\x02\x02\u01A9=\x03\x02\x02\x02\u01AA\u01AB\x07:\x02\x02\u01AB" +
		"?\x03\x02\x02\x02\u01AC\u01AD\x05> \x02\u01AD\u01AE\x07\"\x02\x02\u01AE" +
		"\u01B0\x07\x19\x02\x02\u01AF\u01B1\x05T+\x02\u01B0\u01AF\x03\x02\x02\x02" +
		"\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01CD\x03\x02\x02\x02\u01B2\u01B4\x05" +
		"> \x02\u01B3\u01B5\x07\"\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01BB\x05B\"\x02\u01B7" +
		"\u01B8\x07\x06\x02\x02\u01B8\u01BA\x05B\"\x02\u01B9\u01B7\x03\x02\x02" +
		"\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC" +
		"\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02" +
		"\u01BE\u01C0\x05T+\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
		"\x02\x02\u01C0\u01CD\x03\x02\x02\x02\u01C1\u01C5\x07;\x02\x02\u01C2\u01C4" +
		"\x05F$\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5" +
		"\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C8\x03\x02" +
		"\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CA\x07u\x02\x02\u01C9\u01CB" +
		"\x05T+\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01CD\x03\x02\x02\x02\u01CC\u01AC\x03\x02\x02\x02\u01CC\u01B2\x03\x02" +
		"\x02\x02\u01CC\u01C1\x03\x02\x02\x02\u01CDA\x03\x02\x02\x02\u01CE\u01D2" +
		"\x05\\/\x02\u01CF\u01D2\x05&\x14\x02\u01D0\u01D2\x05r:\x02\u01D1\u01CE" +
		"\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03\x02\x02\x02" +
		"\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01D5\x05H%\x02\u01D4\u01D3\x03\x02" +
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5C\x03\x02\x02\x02\u01D6\u01D7" +
		"\x07H\x02\x02\u01D7\u01D8\x07w\x02\x02\u01D8\u01DA\x07x\x02\x02\u01D9" +
		"\u01DB\x07w\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02" +
		"\x02\u01DB\u01E0\x03\x02\x02\x02\u01DC\u01DD\x07{\x02\x02\u01DD\u01DF" +
		"\x07w\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02" +
		"\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3\x03" +
		"\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E4\x07y\x02\x02\u01E4" +
		"\u01E8\x07z\x02\x02\u01E5\u01E7\x05F$\x02\u01E6\u01E5\x03\x02\x02\x02" +
		"\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03" +
		"\x02\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB" +
		"\u01EC\x07u\x02\x02\u01ECE\x03\x02\x02\x02\u01ED\u01F1\x07t\x02\x02\u01EE" +
		"\u01F0\x05F$\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02" +
		"\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03" +
		"\x02\x02\x02\u01F3\u01F1\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u01F4\u01F5\x07u\x02\x02\u01F5G\x03\x02\x02\x02\u01F6\u01F7" +
		"\x07 \x02\x02\u01F7\u01F9\x05J&\x02\u01F8\u01FA\x05N(\x02\u01F9\u01F8" +
		"\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FAI\x03\x02\x02\x02\u01FB" +
		"\u01FF\x07M\x02\x02\u01FC\u01FF\x05h5\x02\u01FD\u01FF\x07K\x02\x02\u01FE" +
		"\u01FB\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FD\x03\x02" +
		"\x02\x02\u01FFK\x03\x02\x02\x02\u0200\u0201\x073\x02\x02\u0201\u020C\x07" +
		"\x07\x02\x02\u0202\u0204\t\x04\x02\x02\u0203\u0205\x05N(\x02\u0204\u0203" +
		"\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0208\x07\x07\x02\x02\u0207\u0202\x03\x02\x02\x02\u0208\u0209\x03" +
		"\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020C\x03\x02\x02\x02\u020B\u0200\x03\x02\x02\x02\u020B\u0207\x03\x02" +
		"\x02\x02\u020CM\x03\x02\x02\x02\u020D\u020E\x07\f\x02\x02\u020E\u020F" +
		"\x07\x05\x02\x02\u020FO\x03\x02\x02\x02\u0210\u0211\x07,\x02\x02\u0211" +
		"Q\x03\x02\x02\x02\u0212\u0215\x05P)\x02\u0213\u0216\x05t;\x02\u0214\u0216" +
		"\x05\\/\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
		"\u021E\x03\x02\x02\x02\u0217\u021A\x07\x06\x02\x02\u0218\u021B\x05\\/" +
		"\x02\u0219\u021B\x05t;\x02\u021A\u0218\x03\x02\x02\x02\u021A\u0219\x03" +
		"\x02\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u0217\x03\x02\x02\x02\u021D" +
		"\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02" +
		"\x02\x02\u021FS\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222" +
		"\x07E\x02\x02\u0222\u0225\x05V,\x02\u0223\u0224\t\x05\x02\x02\u0224\u0226" +
		"\x05V,\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"U\x03\x02\x02\x02\u0227\u0228\x05X-\x02\u0228\u0229\x07\x07\x02\x02\u0229" +
		"\u022A\x05V,\x02\u022A\u022D\x03\x02\x02\x02\u022B\u022D\x05X-\x02\u022C" +
		"\u0227\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022DW\x03\x02\x02" +
		"\x02\u022E\u0231\x05^0\x02\u022F\u0231\x05Z.\x02\u0230\u022E\x03\x02\x02" +
		"\x02\u0230\u022F\x03\x02\x02\x02\u0231Y\x03\x02\x02\x02\u0232\u023B\x07" +
		"J\x02\x02\u0233\u023B\x07M\x02\x02\u0234\u023B\x05n8\x02\u0235\u023B\x07" +
		"K\x02\x02\u0236\u0237\x07*\x02\x02\u0237\u0238\x07\v\x02\x02\u0238\u023B" +
		"\x07\x04\x02\x02\u0239\u023B\x05l7\x02\u023A\u0232\x03\x02\x02\x02\u023A" +
		"\u0233\x03\x02\x02\x02\u023A\u0234\x03\x02\x02\x02\u023A\u0235\x03\x02" +
		"\x02\x02\u023A\u0236\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B" +
		"\u023D\x03\x02\x02\x02\u023C\u023E\x05N(\x02\u023D\u023C\x03\x02\x02\x02" +
		"\u023D\u023E\x03\x02\x02\x02\u023E[\x03\x02\x02\x02\u023F\u0241\x07\x15" +
		"\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0244\x03\x02\x02\x02\u0242\u0245\x05d3\x02\u0243\u0245\x05V,\x02\u0244" +
		"\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245]\x03\x02\x02" +
		"\x02\u0246\u0247\x07\x15\x02\x02\u0247\u0248\x07M\x02\x02\u0248_\x03\x02" +
		"\x02\x02\u0249\u024B\x05b2\x02\u024A\u024C\x05H%\x02\u024B\u024A\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024Ca\x03\x02\x02\x02\u024D\u0250" +
		"\x05V,\x02\u024E\u0250\x05d3\x02\u024F\u024D\x03\x02\x02\x02\u024F\u024E" +
		"\x03\x02\x02\x02\u0250c\x03\x02\x02\x02\u0251\u0252\x05V,\x02\u0252\u0254" +
		"\x07\v\x02\x02\u0253\u0255\x05f4\x02\u0254\u0253\x03\x02\x02\x02\u0254" +
		"\u0255\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x07\x04" +
		"\x02\x02\u0257e\x03\x02\x02\x02\u0258\u025D\x05\\/\x02\u0259\u025A\x07" +
		"\x06\x02\x02\u025A\u025C\x05\\/\x02\u025B\u0259\x03\x02\x02\x02\u025C" +
		"\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02" +
		"\x02\x02\u025Eg\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0261" +
		"\t\x06\x02\x02\u0261i\x03\x02\x02\x02\u0262\u0263\t\x07\x02\x02\u0263" +
		"k\x03\x02\x02\x02\u0264\u0267\x05h5\x02\u0265\u0267\x05j6\x02\u0266\u0264" +
		"\x03\x02\x02\x02\u0266\u0265\x03\x02\x02\x02\u0267m\x03\x02\x02\x02\u0268" +
		"\u026B\x07\f\x02\x02\u0269\u026C\x076\x02\x02\u026A\u026C\x05p9\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02" +
		"\x02\x02\u026D\u0270\x07>\x02\x02\u026E\u0271\x076\x02\x02\u026F\u0271" +
		"\x05p9\x02\u0270\u026E\x03\x02\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271" +
		"\u0272\x03\x02\x02\x02\u0272\u0273\x07\x05\x02\x02\u0273o\x03\x02\x02" +
		"\x02\u0274\u0275\x07M\x02\x02\u0275\u0276\x07\x07\x02\x02\u0276\u0277" +
		"\x07J\x02\x02\u0277q\x03\x02\x02\x02\u0278\u0279\x07G\x02\x02\u0279\u027A" +
		"\x05z>\x02\u027A\u027B\x07S\x02\x02\u027Bs\x03\x02\x02\x02\u027C\u027D" +
		"\x07G\x02\x02\u027D\u0280\x05\x90I\x02\u027E\u027F\x07W\x02\x02\u027F" +
		"\u0281\x05v<\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281\u0284\x03\x02\x02\x02\u0282\u0283\x07W\x02\x02\u0283\u0285\x05" +
		"v<\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286" +
		"\x03\x02\x02\x02\u0286\u0287\x07S\x02\x02\u0287u\x03\x02\x02\x02\u0288" +
		"\u028B\x05\x90I\x02\u0289\u028B\x05x=\x02\u028A\u0288\x03\x02\x02\x02" +
		"\u028A\u0289\x03\x02\x02\x02\u028Bw\x03\x02\x02\x02\u028C\u028D\t\b\x02" +
		"\x02\u028D\u028E\x07R\x02\x02\u028E\u0291\x07l\x02\x02\u028F\u0290\x07" +
		"W\x02\x02\u0290\u0292\x07m\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292" +
		"\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x07S\x02\x02" +
		"\u0294y\x03\x02\x02\x02\u0295\u0297\x05\x86D\x02\u0296\u0298\x05\x80A" +
		"\x02\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A" +
		"\x03\x02\x02\x02\u0299\u029B\x05\x82B\x02\u029A\u0299\x03\x02\x02\x02" +
		"\u029A\u029B\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02\u029C\u029E\x05" +
		"\x88E\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E" +
		"\u02A0\x03\x02\x02\x02\u029F\u02A1\x05\x98M\x02\u02A0\u029F\x03\x02\x02" +
		"\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A4" +
		"\x05\x9AN\x02\u02A3\u02A2\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02" +
		"\u02A4\u02A6\x03\x02\x02\x02\u02A5\u02A7\x05\x9CO\x02\u02A6\u02A5\x03" +
		"\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8" +
		"\u02AA\x05|?\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02" +
		"\u02AA{\x03\x02\x02\x02\u02AB\u02AC\x07k\x02\x02\u02AC\u02AD\x07m\x02" +
		"\x02\u02AD}\x03\x02\x02\x02\u02AE\u02AF\x07I\x02\x02\u02AF\u02B0\x07o" +
		"\x02\x02\u02B0\u02B1\x07R\x02\x02\u02B1\u02B6\x07o\x02\x02\u02B2\u02B3" +
		"\x07W\x02\x02\u02B3\u02B5\x07o\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5" +
		"\u02B8\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02" +
		"\x02\x02\u02B7\u02B9\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9" +
		"\u02BA\x07S\x02\x02\u02BA\u02BB\x07P\x02\x02\u02BB\u02BC\x05z>\x02\u02BC" +
		"\u02BD\x07Q\x02\x02\u02BD\x7F\x03\x02\x02\x02\u02BE\u02C5\x05\x8CG\x02" +
		"\u02BF\u02C0\x05\x92J\x02\u02C0\u02C1\x05\x94K\x02\u02C1\u02C5\x03\x02" +
		"\x02\x02\u02C2\u02C5\x05\x92J\x02\u02C3\u02C5\x05\x94K\x02\u02C4\u02BE" +
		"\x03\x02\x02\x02\u02C4\u02BF\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02" +
		"\u02C4\u02C3\x03\x02\x02\x02\u02C5\x81\x03\x02\x02\x02\u02C6\u02C7\x07" +
		"i\x02\x02\u02C7\u02C8\x05\x84C\x02\u02C8\x83\x03\x02\x02\x02\u02C9\u02CA" +
		"\x07]\x02\x02\u02CA\u02CB\x05\x90I\x02\u02CB\x85\x03\x02\x02\x02\u02CC" +
		"\u02CD\x07_\x02\x02\u02CD\u02CE\x05\x96L\x02\u02CE\x87\x03\x02\x02\x02" +
		"\u02CF\u02D0\x07`\x02\x02\u02D0\u02D1\x05\x8AF\x02\u02D1\x89\x03\x02\x02" +
		"\x02\u02D2\u02D3\bF\x01\x02\u02D3\u02D4\x07R\x02\x02\u02D4\u02D5\x05\x8A" +
		"F\x02\u02D5\u02D6\x07S\x02\x02\u02D6\u02DF\x03\x02\x02\x02\u02D7\u02D8" +
		"\x07[\x02\x02\u02D8\u02DA\x07^\x02\x02\u02D9\u02DB\x07\\\x02\x02\u02DA" +
		"\u02D9\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x03\x02" +
		"\x02\x02\u02DC\u02DF\x05\x8AF\x04\u02DD\u02DF\x05\x90I\x02\u02DE\u02D2" +
		"\x03\x02\x02\x02\u02DE\u02D7\x03\x02\x02\x02\u02DE\u02DD\x03\x02\x02\x02" +
		"\u02DF\u02E9\x03\x02\x02\x02\u02E0\u02E1\f\x07\x02\x02\u02E1\u02E2\x07" +
		"Y\x02\x02\u02E2\u02E8\x05\x8AF\b\u02E3\u02E4\f\x06\x02\x02\u02E4\u02E5" +
		"\x05\x8EH\x02\u02E5\u02E6\x05\x8AF\x07\u02E6\u02E8\x03\x02\x02\x02\u02E7" +
		"\u02E0\x03\x02\x02\x02\u02E7\u02E3\x03\x02\x02\x02\u02E8\u02EB\x03\x02" +
		"\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
		"\x8B\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07b\x02" +
		"\x02\u02ED\u02EE\x05\x90I\x02\u02EE\u02EF\x07^\x02\x02\u02EF\u02F0\x05" +
		"\x90I\x02\u02F0\x8D\x03\x02\x02\x02\u02F1\u02F2\t\t\x02\x02\u02F2\x8F" +
		"\x03\x02\x02\x02\u02F3\u02F7\x07X\x02\x02\u02F4\u02F8\x07o\x02\x02\u02F5" +
		"\u02F8\x07l\x02\x02\u02F6\u02F8\x05\xA0Q\x02\u02F7\u02F4\x03\x02\x02\x02" +
		"\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F8\u030B\x03" +
		"\x02\x02\x02\u02F9\u02FD\t\n\x02\x02\u02FA\u02FB\x07T\x02\x02\u02FB\u02FC" +
		"\x07l\x02\x02\u02FC\u02FE\x07U\x02\x02\u02FD\u02FA\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u0307\x03\x02\x02\x02\u02FF\u0303\x07V\x02" +
		"\x02\u0300\u0304\x07o\x02\x02\u0301\u0304\x07m\x02\x02\u0302\u0304\x05" +
		"\xA0Q\x02\u0303\u0300\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303" +
		"\u0302\x03\x02\x02\x02\u0304\u0306\x03\x02\x02\x02\u0305\u02FF\x03\x02" +
		"\x02\x02\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02\u0307" +
		"\u0308\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02" +
		"\x02\x02\u030A\u02F3\x03\x02\x02\x02\u030A\u02F9\x03\x02\x02\x02\u030B" +
		"\x91\x03\x02\x02\x02\u030C\u030D\x07c\x02\x02\u030D\u030E\x07l\x02\x02" +
		"\u030E\u030F\x07f\x02\x02\u030F\x93\x03\x02\x02\x02\u0310\u0311\x07d\x02" +
		"\x02\u0311\u0312\x07l\x02\x02\u0312\u0313\x07f\x02\x02\u0313\x95\x03\x02" +
		"\x02\x02\u0314\u0318\x07o\x02\x02\u0315\u0318\x07m\x02\x02\u0316\u0318" +
		"\x05\xA0Q\x02\u0317\u0314\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02" +
		"\u0317\u0316\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u031A\x07" +
		"V\x02\x02\u031A\u031C\x05\x96L\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C" +
		"\x03\x02\x02\x02\u031C\x97\x03\x02\x02\x02\u031D\u031E\x07a\x02\x02\u031E" +
		"\u0323\x05\x96L\x02\u031F\u0320\x07W\x02\x02\u0320\u0322\x05\x96L\x02" +
		"\u0321\u031F\x03\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03" +
		"\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325" +
		"\u0323\x03\x02\x02\x02\u0326\u0328\x07e\x02\x02\u0327\u0326\x03\x02\x02" +
		"\x02\u0327\u0328\x03\x02\x02\x02\u0328\x99\x03\x02\x02\x02\u0329\u032A" +
		"\x07h\x02\x02\u032A\u032F\x05\x9EP\x02\u032B\u032C\x07W\x02\x02\u032C" +
		"\u032E\x05\x9EP\x02\u032D\u032B\x03\x02\x02\x02\u032E\u0331\x03\x02\x02" +
		"\x02\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\x9B" +
		"\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0333\x07j\x02\x02" +
		"\u0333\u0334\x07l\x02\x02\u0334\x9D\x03\x02\x02\x02\u0335\u0338\x07O\x02" +
		"\x02\u0336\u0338\x05\x90I\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0336" +
		"\x03\x02\x02\x02\u0338\x9F\x03\x02\x02\x02\u0339\u033A\t\v\x02\x02\u033A" +
		"\xA1\x03\x02\x02\x02\u033B\u033D\x07q\x02\x02\u033C\u033E\x07s\x02\x02" +
		"\u033D\u033C\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x03" +
		"\x02\x02\x02\u033F\u0340\x07r\x02\x02\u0340\xA3\x03\x02\x02\x02f\xA7\xAC" +
		"\xAF\xB2\xB5\xB8\xBB\xBE\xC1\xC7\xCE\xD9\xE0\xE2\xE7\xEC\xEF\xF3\xFD\u011B" +
		"\u011E\u0126\u012F\u0135\u013E\u014D\u0152\u0156\u0159\u0170\u017E\u0180" +
		"\u018B\u0199\u019E\u01A1\u01B0\u01B4\u01BB\u01BF\u01C5\u01CA\u01CC\u01D1" +
		"\u01D4\u01DA\u01E0\u01E8\u01F1\u01F9\u01FE\u0204\u0209\u020B\u0215\u021A" +
		"\u021E\u0225\u022C\u0230\u023A\u023D\u0240\u0244\u024B\u024F\u0254\u025D" +
		"\u0266\u026B\u0270\u0280\u0284\u028A\u0291\u0297\u029A\u029D\u02A0\u02A3" +
		"\u02A6\u02A9\u02B6\u02C4\u02DA\u02DE\u02E7\u02E9\u02F7\u02FD\u0303\u0307" +
		"\u030A\u0317\u031B\u0323\u0327\u032F\u0337\u033D";
	public static readonly _serializedATN: string = Utils.join(
		[
			BaseRqlParser._serializedATNSegment0,
			BaseRqlParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BaseRqlParser.__ATN) {
			BaseRqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BaseRqlParser._serializedATN));
		}

		return BaseRqlParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public fromStatement(): FromStatementContext {
		return this.getRuleContext(0, FromStatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(BaseRqlParser.EOF, 0); }
	public functionStatment(): FunctionStatmentContext[];
	public functionStatment(i: number): FunctionStatmentContext;
	public functionStatment(i?: number): FunctionStatmentContext | FunctionStatmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionStatmentContext);
		} else {
			return this.getRuleContext(i, FunctionStatmentContext);
		}
	}
	public groupByStatement(): GroupByStatementContext | undefined {
		return this.tryGetRuleContext(0, GroupByStatementContext);
	}
	public whereStatement(): WhereStatementContext | undefined {
		return this.tryGetRuleContext(0, WhereStatementContext);
	}
	public loadStatement(): LoadStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadStatementContext);
	}
	public orderByStatement(): OrderByStatementContext | undefined {
		return this.tryGetRuleContext(0, OrderByStatementContext);
	}
	public updateStatement(): UpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, UpdateStatementContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public limitStatement(): LimitStatementContext | undefined {
		return this.tryGetRuleContext(0, LimitStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_prog; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStatmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_functionStatment; }
	public copyFrom(ctx: FunctionStatmentContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaScriptFunctionContext extends FunctionStatmentContext {
	public jsFunction(): JsFunctionContext {
		return this.getRuleContext(0, JsFunctionContext);
	}
	constructor(ctx: FunctionStatmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitJavaScriptFunction) {
			return visitor.visitJavaScriptFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeSeriesFunctionContext extends FunctionStatmentContext {
	public tsFunction(): TsFunctionContext {
		return this.getRuleContext(0, TsFunctionContext);
	}
	constructor(ctx: FunctionStatmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTimeSeriesFunction) {
			return visitor.visitTimeSeriesFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(BaseRqlParser.UPDATE, 0); }
	public US_OP(): TerminalNode { return this.getToken(BaseRqlParser.US_OP, 0); }
	public US_CL(): TerminalNode { return this.getToken(BaseRqlParser.US_CL, 0); }
	public updateBody(): UpdateBodyContext[];
	public updateBody(i: number): UpdateBodyContext;
	public updateBody(i?: number): UpdateBodyContext | UpdateBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateBodyContext);
		} else {
			return this.getRuleContext(i, UpdateBodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_updateStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromModeContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(BaseRqlParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_fromMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitFromMode) {
			return visitor.visitFromMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_fromStatement; }
	public copyFrom(ctx: FromStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class CollectionByIndexContext extends FromStatementContext {
	public _collection!: IndexNameContext;
	public fromMode(): FromModeContext {
		return this.getRuleContext(0, FromModeContext);
	}
	public INDEX(): TerminalNode { return this.getToken(BaseRqlParser.INDEX, 0); }
	public indexName(): IndexNameContext {
		return this.getRuleContext(0, IndexNameContext);
	}
	public aliasWithOptionalAs(): AliasWithOptionalAsContext | undefined {
		return this.tryGetRuleContext(0, AliasWithOptionalAsContext);
	}
	constructor(ctx: FromStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitCollectionByIndex) {
			return visitor.visitCollectionByIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AllCollectionsContext extends FromStatementContext {
	public FROM(): TerminalNode { return this.getToken(BaseRqlParser.FROM, 0); }
	public ALL_DOCS(): TerminalNode { return this.getToken(BaseRqlParser.ALL_DOCS, 0); }
	constructor(ctx: FromStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitAllCollections) {
			return visitor.visitAllCollections(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CollectionByNameContext extends FromStatementContext {
	public _collection!: CollectionNameContext;
	public fromMode(): FromModeContext {
		return this.getRuleContext(0, FromModeContext);
	}
	public collectionName(): CollectionNameContext {
		return this.getRuleContext(0, CollectionNameContext);
	}
	public aliasWithOptionalAs(): AliasWithOptionalAsContext | undefined {
		return this.tryGetRuleContext(0, AliasWithOptionalAsContext);
	}
	constructor(ctx: FromStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitCollectionByName) {
			return visitor.visitCollectionByName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexNameContext extends ParserRuleContext {
	public WORD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WORD, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING, 0); }
	public identifiersWithoutRootKeywords(): IdentifiersWithoutRootKeywordsContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersWithoutRootKeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_indexName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitIndexName) {
			return visitor.visitIndexName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionNameContext extends ParserRuleContext {
	public WORD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WORD, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING, 0); }
	public identifiersWithoutRootKeywords(): IdentifiersWithoutRootKeywordsContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersWithoutRootKeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_collectionName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitCollectionName) {
			return visitor.visitCollectionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasWithOptionalAsContext extends ParserRuleContext {
	public _name!: AliasNameContext;
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.AS, 0); }
	public asArray(): AsArrayContext | undefined {
		return this.tryGetRuleContext(0, AsArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_aliasWithOptionalAs; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitAliasWithOptionalAs) {
			return visitor.visitAliasWithOptionalAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByModeContext extends ParserRuleContext {
	public GROUP_BY(): TerminalNode { return this.getToken(BaseRqlParser.GROUP_BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_groupByMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByMode) {
			return visitor.visitGroupByMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByStatementContext extends ParserRuleContext {
	public _value!: ParameterWithOptionalAliasContext;
	public groupByMode(): GroupByModeContext {
		return this.getRuleContext(0, GroupByModeContext);
	}
	public parameterWithOptionalAlias(): ParameterWithOptionalAliasContext[];
	public parameterWithOptionalAlias(i: number): ParameterWithOptionalAliasContext;
	public parameterWithOptionalAlias(i?: number): ParameterWithOptionalAliasContext | ParameterWithOptionalAliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterWithOptionalAliasContext);
		} else {
			return this.getRuleContext(i, ParameterWithOptionalAliasContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_groupByStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByStatement) {
			return visitor.visitGroupByStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuggestGroupByContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_suggestGroupBy; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSuggestGroupBy) {
			return visitor.visitSuggestGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereModeContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(BaseRqlParser.WHERE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_whereMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitWhereMode) {
			return visitor.visitWhereMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereStatementContext extends ParserRuleContext {
	public whereMode(): WhereModeContext {
		return this.getRuleContext(0, WhereModeContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_whereStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitWhereStatement) {
			return visitor.visitWhereStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class BinaryExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	public binary(): BinaryContext {
		return this.getRuleContext(0, BinaryContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) {
			return visitor.visitBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpParContext extends ExprContext {
	public OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.OP_PAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.CL_PAR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOpPar) {
			return visitor.visitOpPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualExpressionContext extends ExprContext {
	public _left!: ExprValueContext;
	public _right!: ExprValueContext;
	public EQUAL(): TerminalNode { return this.getToken(BaseRqlParser.EQUAL, 0); }
	public exprValue(): ExprValueContext[];
	public exprValue(i: number): ExprValueContext;
	public exprValue(i?: number): ExprValueContext | ExprValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprValueContext);
		} else {
			return this.getRuleContext(i, ExprValueContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitEqualExpression) {
			return visitor.visitEqualExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MathExpressionContext extends ExprContext {
	public _left!: ExprValueContext;
	public _right!: ExprValueContext;
	public MATH(): TerminalNode { return this.getToken(BaseRqlParser.MATH, 0); }
	public exprValue(): ExprValueContext[];
	public exprValue(i: number): ExprValueContext;
	public exprValue(i?: number): ExprValueContext | ExprValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprValueContext);
		} else {
			return this.getRuleContext(i, ExprValueContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitMathExpression) {
			return visitor.visitMathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialFunctionstContext extends ExprContext {
	public specialFunctions(): SpecialFunctionsContext {
		return this.getRuleContext(0, SpecialFunctionsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialFunctionst) {
			return visitor.visitSpecialFunctionst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExprContext extends ExprContext {
	public inFunction(): InFunctionContext {
		return this.getRuleContext(0, InFunctionContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitInExpr) {
			return visitor.visitInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenExprContext extends ExprContext {
	public betweenFunction(): BetweenFunctionContext {
		return this.getRuleContext(0, BetweenFunctionContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitBetweenExpr) {
			return visitor.visitBetweenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalFuncContext extends ExprContext {
	public _funcExpr!: FunctionContext;
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitNormalFunc) {
			return visitor.visitNormalFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExpressionContext extends ExprContext {
	public TRUE(): TerminalNode { return this.getToken(BaseRqlParser.TRUE, 0); }
	public AND(): TerminalNode { return this.getToken(BaseRqlParser.AND, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.AND, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NOT, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_binary; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitBinary) {
			return visitor.visitBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_exprValue; }
	public copyFrom(ctx: ExprValueContext): void {
		super.copyFrom(ctx);
	}
}
export class ParameterExprContext extends ExprValueContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitParameterExpr) {
			return visitor.visitParameterExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InFunctionContext extends ParserRuleContext {
	public _value!: LiteralContext;
	public _first!: LiteralContext;
	public _next!: LiteralContext;
	public IN(): TerminalNode { return this.getToken(BaseRqlParser.IN, 0); }
	public OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.OP_PAR, 0); }
	public CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.CL_PAR, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ALL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_inFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitInFunction) {
			return visitor.visitInFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BetweenFunctionContext extends ParserRuleContext {
	public _value!: LiteralContext;
	public _from!: LiteralContext;
	public _to!: LiteralContext;
	public BETWEEN(): TerminalNode { return this.getToken(BaseRqlParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(BaseRqlParser.AND, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_betweenFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitBetweenFunction) {
			return visitor.visitBetweenFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialFunctionsContext extends ParserRuleContext {
	public specialFunctionName(): SpecialFunctionNameContext {
		return this.getRuleContext(0, SpecialFunctionNameContext);
	}
	public OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.OP_PAR, 0); }
	public CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.CL_PAR, 0); }
	public specialParam(): SpecialParamContext[];
	public specialParam(i: number): SpecialParamContext;
	public specialParam(i?: number): SpecialParamContext | SpecialParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecialParamContext);
		} else {
			return this.getRuleContext(i, SpecialParamContext);
		}
	}
	public aliasWithRequiredAs(): AliasWithRequiredAsContext[];
	public aliasWithRequiredAs(i: number): AliasWithRequiredAsContext;
	public aliasWithRequiredAs(i?: number): AliasWithRequiredAsContext | AliasWithRequiredAsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasWithRequiredAsContext);
		} else {
			return this.getRuleContext(i, AliasWithRequiredAsContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_specialFunctions; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialFunctions) {
			return visitor.visitSpecialFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialFunctionNameContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ID, 0); }
	public FUZZY(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FUZZY, 0); }
	public SEARCH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.SEARCH, 0); }
	public FACET(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FACET, 0); }
	public BOOST(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.BOOST, 0); }
	public STARTS_WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STARTS_WITH, 0); }
	public ENDS_WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ENDS_WITH, 0); }
	public MORELIKETHIS(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.MORELIKETHIS, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.INTERSECT, 0); }
	public EXACT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.EXACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_specialFunctionName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialFunctionName) {
			return visitor.visitSpecialFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialParamContext extends ParserRuleContext {
	public OP_PAR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OP_PAR, 0); }
	public specialParam(): SpecialParamContext[];
	public specialParam(i: number): SpecialParamContext;
	public specialParam(i?: number): SpecialParamContext | SpecialParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecialParamContext);
		} else {
			return this.getRuleContext(i, SpecialParamContext);
		}
	}
	public CL_PAR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.CL_PAR, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.EQUAL, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OR, 0); }
	public MATH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.MATH, 0); }
	public inFunction(): InFunctionContext | undefined {
		return this.tryGetRuleContext(0, InFunctionContext);
	}
	public betweenFunction(): BetweenFunctionContext | undefined {
		return this.tryGetRuleContext(0, BetweenFunctionContext);
	}
	public specialFunctions(): SpecialFunctionsContext | undefined {
		return this.tryGetRuleContext(0, SpecialFunctionsContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public identifiersAllNames(): IdentifiersAllNamesContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersAllNamesContext);
	}
	public NUM(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_specialParam; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialParam) {
			return visitor.visitSpecialParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadModeContext extends ParserRuleContext {
	public LOAD(): TerminalNode { return this.getToken(BaseRqlParser.LOAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_loadMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitLoadMode) {
			return visitor.visitLoadMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStatementContext extends ParserRuleContext {
	public _item!: LoadDocumentByNameContext;
	public loadMode(): LoadModeContext {
		return this.getRuleContext(0, LoadModeContext);
	}
	public loadDocumentByName(): LoadDocumentByNameContext[];
	public loadDocumentByName(i: number): LoadDocumentByNameContext;
	public loadDocumentByName(i?: number): LoadDocumentByNameContext | LoadDocumentByNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LoadDocumentByNameContext);
		} else {
			return this.getRuleContext(i, LoadDocumentByNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_loadStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitLoadStatement) {
			return visitor.visitLoadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadDocumentByNameContext extends ParserRuleContext {
	public _name!: VariableContext;
	public _as!: AliasWithOptionalAsContext;
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public aliasWithOptionalAs(): AliasWithOptionalAsContext {
		return this.getRuleContext(0, AliasWithOptionalAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_loadDocumentByName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitLoadDocumentByName) {
			return visitor.visitLoadDocumentByName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByModeContext extends ParserRuleContext {
	public ORDER_BY(): TerminalNode { return this.getToken(BaseRqlParser.ORDER_BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderByMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByMode) {
			return visitor.visitOrderByMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByStatementContext extends ParserRuleContext {
	public _value!: OrderByItemContext;
	public orderByMode(): OrderByModeContext {
		return this.getRuleContext(0, OrderByModeContext);
	}
	public orderByItem(): OrderByItemContext[];
	public orderByItem(i: number): OrderByItemContext;
	public orderByItem(i?: number): OrderByItemContext | OrderByItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderByItemContext);
		} else {
			return this.getRuleContext(i, OrderByItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderByStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByStatement) {
			return visitor.visitOrderByStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByItemContext extends ParserRuleContext {
	public _value!: LiteralContext;
	public _order!: OrderBySortingContext;
	public _orderValueType!: OrderByOrderContext;
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public orderBySorting(): OrderBySortingContext | undefined {
		return this.tryGetRuleContext(0, OrderBySortingContext);
	}
	public orderByOrder(): OrderByOrderContext | undefined {
		return this.tryGetRuleContext(0, OrderByOrderContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderByItem; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByItem) {
			return visitor.visitOrderByItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderBySortingContext extends ParserRuleContext {
	public _sortingMode!: OrderBySortingAsContext;
	public AS(): TerminalNode { return this.getToken(BaseRqlParser.AS, 0); }
	public orderBySortingAs(): OrderBySortingAsContext {
		return this.getRuleContext(0, OrderBySortingAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderBySorting; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderBySorting) {
			return visitor.visitOrderBySorting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderBySortingAsContext extends ParserRuleContext {
	public STRING_W(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING_W, 0); }
	public ALPHANUMERIC(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ALPHANUMERIC, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.LONG, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderBySortingAs; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderBySortingAs) {
			return visitor.visitOrderBySortingAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByOrderContext extends ParserRuleContext {
	public SORTING(): TerminalNode { return this.getToken(BaseRqlParser.SORTING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_orderByOrder; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByOrder) {
			return visitor.visitOrderByOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectModeContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(BaseRqlParser.SELECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_selectMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitSelectMode) {
			return visitor.visitSelectMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_selectStatement; }
	public copyFrom(ctx: SelectStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class GetAllDistinctContext extends SelectStatementContext {
	public selectMode(): SelectModeContext {
		return this.getRuleContext(0, SelectModeContext);
	}
	public DISTINCT(): TerminalNode { return this.getToken(BaseRqlParser.DISTINCT, 0); }
	public STAR(): TerminalNode { return this.getToken(BaseRqlParser.STAR, 0); }
	public limitStatement(): LimitStatementContext | undefined {
		return this.tryGetRuleContext(0, LimitStatementContext);
	}
	constructor(ctx: SelectStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitGetAllDistinct) {
			return visitor.visitGetAllDistinct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProjectIndividualFieldsContext extends SelectStatementContext {
	public _field!: ProjectFieldContext;
	public selectMode(): SelectModeContext {
		return this.getRuleContext(0, SelectModeContext);
	}
	public projectField(): ProjectFieldContext[];
	public projectField(i: number): ProjectFieldContext;
	public projectField(i?: number): ProjectFieldContext | ProjectFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectFieldContext);
		} else {
			return this.getRuleContext(i, ProjectFieldContext);
		}
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DISTINCT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	public limitStatement(): LimitStatementContext | undefined {
		return this.tryGetRuleContext(0, LimitStatementContext);
	}
	constructor(ctx: SelectStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitProjectIndividualFields) {
			return visitor.visitProjectIndividualFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JavascriptCodeContext extends SelectStatementContext {
	public JS_SELECT(): TerminalNode { return this.getToken(BaseRqlParser.JS_SELECT, 0); }
	public JS_CL(): TerminalNode { return this.getToken(BaseRqlParser.JS_CL, 0); }
	public jsBody(): JsBodyContext[];
	public jsBody(i: number): JsBodyContext;
	public jsBody(i?: number): JsBodyContext | JsBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsBodyContext);
		} else {
			return this.getRuleContext(i, JsBodyContext);
		}
	}
	public limitStatement(): LimitStatementContext | undefined {
		return this.tryGetRuleContext(0, LimitStatementContext);
	}
	constructor(ctx: SelectStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitJavascriptCode) {
			return visitor.visitJavascriptCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectFieldContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public specialFunctions(): SpecialFunctionsContext | undefined {
		return this.tryGetRuleContext(0, SpecialFunctionsContext);
	}
	public tsProg(): TsProgContext | undefined {
		return this.tryGetRuleContext(0, TsProgContext);
	}
	public aliasWithRequiredAs(): AliasWithRequiredAsContext | undefined {
		return this.tryGetRuleContext(0, AliasWithRequiredAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_projectField; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitProjectField) {
			return visitor.visitProjectField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsFunctionContext extends ParserRuleContext {
	public JS_FUNCTION_DECLARATION(): TerminalNode { return this.getToken(BaseRqlParser.JS_FUNCTION_DECLARATION, 0); }
	public JFN_WORD(): TerminalNode[];
	public JFN_WORD(i: number): TerminalNode;
	public JFN_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.JFN_WORD);
		} else {
			return this.getToken(BaseRqlParser.JFN_WORD, i);
		}
	}
	public JFN_OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.JFN_OP_PAR, 0); }
	public JFN_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.JFN_CL_PAR, 0); }
	public JFN_OP_JS(): TerminalNode { return this.getToken(BaseRqlParser.JFN_OP_JS, 0); }
	public JS_CL(): TerminalNode { return this.getToken(BaseRqlParser.JS_CL, 0); }
	public JFN_COMMA(): TerminalNode[];
	public JFN_COMMA(i: number): TerminalNode;
	public JFN_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.JFN_COMMA);
		} else {
			return this.getToken(BaseRqlParser.JFN_COMMA, i);
		}
	}
	public jsBody(): JsBodyContext[];
	public jsBody(i: number): JsBodyContext;
	public jsBody(i?: number): JsBodyContext | JsBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsBodyContext);
		} else {
			return this.getRuleContext(i, JsBodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_jsFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitJsFunction) {
			return visitor.visitJsFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsBodyContext extends ParserRuleContext {
	public JS_OP(): TerminalNode { return this.getToken(BaseRqlParser.JS_OP, 0); }
	public JS_CL(): TerminalNode { return this.getToken(BaseRqlParser.JS_CL, 0); }
	public jsBody(): JsBodyContext[];
	public jsBody(i: number): JsBodyContext;
	public jsBody(i?: number): JsBodyContext | JsBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsBodyContext);
		} else {
			return this.getRuleContext(i, JsBodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_jsBody; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitJsBody) {
			return visitor.visitJsBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasWithRequiredAsContext extends ParserRuleContext {
	public _name!: AliasNameContext;
	public AS(): TerminalNode { return this.getToken(BaseRqlParser.AS, 0); }
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public asArray(): AsArrayContext | undefined {
		return this.tryGetRuleContext(0, AsArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_aliasWithRequiredAs; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitAliasWithRequiredAs) {
			return visitor.visitAliasWithRequiredAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public WORD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WORD, 0); }
	public identifiersWithoutRootKeywords(): IdentifiersWithoutRootKeywordsContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersWithoutRootKeywordsContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_aliasName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitAliasName) {
			return visitor.visitAliasName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrealiasContext extends ParserRuleContext {
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.METADATA, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.DOT);
		} else {
			return this.getToken(BaseRqlParser.DOT, i);
		}
	}
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.WORD);
		} else {
			return this.getToken(BaseRqlParser.WORD, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.STRING);
		} else {
			return this.getToken(BaseRqlParser.STRING, i);
		}
	}
	public asArray(): AsArrayContext[];
	public asArray(i: number): AsArrayContext;
	public asArray(i?: number): AsArrayContext | AsArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AsArrayContext);
		} else {
			return this.getRuleContext(i, AsArrayContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_prealias; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitPrealias) {
			return visitor.visitPrealias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsArrayContext extends ParserRuleContext {
	public OP_Q(): TerminalNode { return this.getToken(BaseRqlParser.OP_Q, 0); }
	public CL_Q(): TerminalNode { return this.getToken(BaseRqlParser.CL_Q, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_asArray; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitAsArray) {
			return visitor.visitAsArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeModeContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(BaseRqlParser.INCLUDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_includeMode; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitIncludeMode) {
			return visitor.visitIncludeMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	public includeMode(): IncludeModeContext {
		return this.getRuleContext(0, IncludeModeContext);
	}
	public tsIncludeTimeseriesFunction(): TsIncludeTimeseriesFunctionContext[];
	public tsIncludeTimeseriesFunction(i: number): TsIncludeTimeseriesFunctionContext;
	public tsIncludeTimeseriesFunction(i?: number): TsIncludeTimeseriesFunctionContext | TsIncludeTimeseriesFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsIncludeTimeseriesFunctionContext);
		} else {
			return this.getRuleContext(i, TsIncludeTimeseriesFunctionContext);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_includeStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) {
			return visitor.visitIncludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitStatementContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(BaseRqlParser.LIMIT, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.COMMA, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OFFSET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_limitStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitLimitStatement) {
			return visitor.visitLimitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public _name!: MemberNameContext;
	public _member!: VariableContext;
	public DOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DOT, 0); }
	public memberName(): MemberNameContext {
		return this.getRuleContext(0, MemberNameContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_variable; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberNameContext extends ParserRuleContext {
	public cacheParam(): CacheParamContext | undefined {
		return this.tryGetRuleContext(0, CacheParamContext);
	}
	public param(): ParamContext | undefined {
		return this.tryGetRuleContext(0, ParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_memberName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitMemberName) {
			return visitor.visitMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public NUM(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NUM, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WORD, 0); }
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ID, 0); }
	public OP_PAR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OP_PAR, 0); }
	public CL_PAR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.CL_PAR, 0); }
	public identifiersAllNames(): IdentifiersAllNamesContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersAllNamesContext);
	}
	public asArray(): AsArrayContext | undefined {
		return this.tryGetRuleContext(0, AsArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_param; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public DOL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CacheParamContext extends ParserRuleContext {
	public DOL(): TerminalNode { return this.getToken(BaseRqlParser.DOL, 0); }
	public WORD(): TerminalNode { return this.getToken(BaseRqlParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_cacheParam; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitCacheParam) {
			return visitor.visitCacheParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterWithOptionalAliasContext extends ParserRuleContext {
	public _value!: VariableOrFunctionContext;
	public _as!: AliasWithRequiredAsContext;
	public variableOrFunction(): VariableOrFunctionContext {
		return this.getRuleContext(0, VariableOrFunctionContext);
	}
	public aliasWithRequiredAs(): AliasWithRequiredAsContext | undefined {
		return this.tryGetRuleContext(0, AliasWithRequiredAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_parameterWithOptionalAlias; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitParameterWithOptionalAlias) {
			return visitor.visitParameterWithOptionalAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableOrFunctionContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_variableOrFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitVariableOrFunction) {
			return visitor.visitVariableOrFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _addr!: VariableContext;
	public _args!: ArgumentsContext;
	public OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.OP_PAR, 0); }
	public CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.CL_PAR, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_function; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.COMMA);
		} else {
			return this.getToken(BaseRqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_arguments; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiersWithoutRootKeywordsContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ALL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.AND, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.BETWEEN, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DISTINCT, 0); }
	public ENDS_WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ENDS_WITH, 0); }
	public STARTS_WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STARTS_WITH, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FALSE, 0); }
	public FACET(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FACET, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.IN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ID, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.INTERSECT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.LONG, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.MATCH, 0); }
	public MORELIKETHIS(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.MORELIKETHIS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NULL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.OR, 0); }
	public STRING_W(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.STRING_W, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TRUE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WITH, 0); }
	public EXACT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.EXACT, 0); }
	public BOOST(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.BOOST, 0); }
	public SEARCH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.SEARCH, 0); }
	public FUZZY(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FUZZY, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.METADATA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TO, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.NOT, 0); }
	public SORTING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.SORTING, 0); }
	public ALPHANUMERIC(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ALPHANUMERIC, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_identifiersWithoutRootKeywords; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifiersWithoutRootKeywords) {
			return visitor.visitIdentifiersWithoutRootKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootKeywordsContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.FROM, 0); }
	public GROUP_BY(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.GROUP_BY, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.WHERE, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.LOAD, 0); }
	public ORDER_BY(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.ORDER_BY, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.SELECT, 0); }
	public INCLUDE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.INCLUDE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.LIMIT, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.INDEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_rootKeywords; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitRootKeywords) {
			return visitor.visitRootKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiersAllNamesContext extends ParserRuleContext {
	public identifiersWithoutRootKeywords(): IdentifiersWithoutRootKeywordsContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersWithoutRootKeywordsContext);
	}
	public rootKeywords(): RootKeywordsContext | undefined {
		return this.tryGetRuleContext(0, RootKeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_identifiersAllNames; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifiersAllNames) {
			return visitor.visitIdentifiersAllNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public OP_Q(): TerminalNode { return this.getToken(BaseRqlParser.OP_Q, 0); }
	public TO(): TerminalNode { return this.getToken(BaseRqlParser.TO, 0); }
	public CL_Q(): TerminalNode { return this.getToken(BaseRqlParser.CL_Q, 0); }
	public NULL(): TerminalNode[];
	public NULL(i: number): TerminalNode;
	public NULL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.NULL);
		} else {
			return this.getToken(BaseRqlParser.NULL, i);
		}
	}
	public dateString(): DateStringContext[];
	public dateString(i: number): DateStringContext;
	public dateString(i?: number): DateStringContext | DateStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateStringContext);
		} else {
			return this.getRuleContext(i, DateStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_date; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateStringContext extends ParserRuleContext {
	public WORD(): TerminalNode { return this.getToken(BaseRqlParser.WORD, 0); }
	public DOT(): TerminalNode { return this.getToken(BaseRqlParser.DOT, 0); }
	public NUM(): TerminalNode { return this.getToken(BaseRqlParser.NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_dateString; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitDateString) {
			return visitor.visitDateString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsProgContext extends ParserRuleContext {
	public TIMESERIES(): TerminalNode { return this.getToken(BaseRqlParser.TIMESERIES, 0); }
	public tsQueryBody(): TsQueryBodyContext {
		return this.getRuleContext(0, TsQueryBodyContext);
	}
	public TS_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsProg; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsProg) {
			return visitor.visitTsProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsIncludeTimeseriesFunctionContext extends ParserRuleContext {
	public TIMESERIES(): TerminalNode { return this.getToken(BaseRqlParser.TIMESERIES, 0); }
	public tsLiteral(): TsLiteralContext {
		return this.getRuleContext(0, TsLiteralContext);
	}
	public TS_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_PAR, 0); }
	public TS_COMMA(): TerminalNode[];
	public TS_COMMA(i: number): TerminalNode;
	public TS_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_COMMA);
		} else {
			return this.getToken(BaseRqlParser.TS_COMMA, i);
		}
	}
	public tsIncludeLiteral(): TsIncludeLiteralContext[];
	public tsIncludeLiteral(i: number): TsIncludeLiteralContext;
	public tsIncludeLiteral(i?: number): TsIncludeLiteralContext | TsIncludeLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsIncludeLiteralContext);
		} else {
			return this.getRuleContext(i, TsIncludeLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsIncludeTimeseriesFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsIncludeTimeseriesFunction) {
			return visitor.visitTsIncludeTimeseriesFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsIncludeLiteralContext extends ParserRuleContext {
	public tsLiteral(): TsLiteralContext | undefined {
		return this.tryGetRuleContext(0, TsLiteralContext);
	}
	public tsIncludeSpecialMethod(): TsIncludeSpecialMethodContext | undefined {
		return this.tryGetRuleContext(0, TsIncludeSpecialMethodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsIncludeLiteral; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsIncludeLiteral) {
			return visitor.visitTsIncludeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsIncludeSpecialMethodContext extends ParserRuleContext {
	public TS_OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_OP_PAR, 0); }
	public TS_NUM(): TerminalNode { return this.getToken(BaseRqlParser.TS_NUM, 0); }
	public TS_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_PAR, 0); }
	public TS_LAST(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_LAST, 0); }
	public TS_FIRST(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_FIRST, 0); }
	public TS_COMMA(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_COMMA, 0); }
	public TS_STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsIncludeSpecialMethod; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsIncludeSpecialMethod) {
			return visitor.visitTsIncludeSpecialMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsQueryBodyContext extends ParserRuleContext {
	public _from!: TsFROMContext;
	public _range!: TsTimeRangeStatementContext;
	public _load!: TsLoadStatementContext;
	public _where!: TsWHEREContext;
	public _groupBy!: TsGroupByContext;
	public _select!: TsSelectContext;
	public _scale!: TsSelectScaleProjectionContext;
	public _offset!: TsOffsetContext;
	public tsFROM(): TsFROMContext {
		return this.getRuleContext(0, TsFROMContext);
	}
	public tsTimeRangeStatement(): TsTimeRangeStatementContext | undefined {
		return this.tryGetRuleContext(0, TsTimeRangeStatementContext);
	}
	public tsLoadStatement(): TsLoadStatementContext | undefined {
		return this.tryGetRuleContext(0, TsLoadStatementContext);
	}
	public tsWHERE(): TsWHEREContext | undefined {
		return this.tryGetRuleContext(0, TsWHEREContext);
	}
	public tsGroupBy(): TsGroupByContext | undefined {
		return this.tryGetRuleContext(0, TsGroupByContext);
	}
	public tsSelect(): TsSelectContext | undefined {
		return this.tryGetRuleContext(0, TsSelectContext);
	}
	public tsSelectScaleProjection(): TsSelectScaleProjectionContext | undefined {
		return this.tryGetRuleContext(0, TsSelectScaleProjectionContext);
	}
	public tsOffset(): TsOffsetContext | undefined {
		return this.tryGetRuleContext(0, TsOffsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsQueryBody; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsQueryBody) {
			return visitor.visitTsQueryBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsOffsetContext extends ParserRuleContext {
	public TS_OFFSET(): TerminalNode { return this.getToken(BaseRqlParser.TS_OFFSET, 0); }
	public TS_STRING(): TerminalNode { return this.getToken(BaseRqlParser.TS_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsOffset; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsOffset) {
			return visitor.visitTsOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsFunctionContext extends ParserRuleContext {
	public _body!: TsQueryBodyContext;
	public TIMESERIES_FUNCTION_DECLARATION(): TerminalNode { return this.getToken(BaseRqlParser.TIMESERIES_FUNCTION_DECLARATION, 0); }
	public TS_WORD(): TerminalNode[];
	public TS_WORD(i: number): TerminalNode;
	public TS_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_WORD);
		} else {
			return this.getToken(BaseRqlParser.TS_WORD, i);
		}
	}
	public TS_OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_OP_PAR, 0); }
	public TS_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_PAR, 0); }
	public TS_OP_C(): TerminalNode { return this.getToken(BaseRqlParser.TS_OP_C, 0); }
	public TS_CL_C(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_C, 0); }
	public tsQueryBody(): TsQueryBodyContext {
		return this.getRuleContext(0, TsQueryBodyContext);
	}
	public TS_COMMA(): TerminalNode[];
	public TS_COMMA(i: number): TerminalNode;
	public TS_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_COMMA);
		} else {
			return this.getToken(BaseRqlParser.TS_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsFunction; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsFunction) {
			return visitor.visitTsFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsTimeRangeStatementContext extends ParserRuleContext {
	public _first!: TsTimeRangeFirstContext;
	public _last!: TsTimeRangeLastContext;
	public tsBetween(): TsBetweenContext | undefined {
		return this.tryGetRuleContext(0, TsBetweenContext);
	}
	public tsTimeRangeFirst(): TsTimeRangeFirstContext | undefined {
		return this.tryGetRuleContext(0, TsTimeRangeFirstContext);
	}
	public tsTimeRangeLast(): TsTimeRangeLastContext | undefined {
		return this.tryGetRuleContext(0, TsTimeRangeLastContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsTimeRangeStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsTimeRangeStatement) {
			return visitor.visitTsTimeRangeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsLoadStatementContext extends ParserRuleContext {
	public TS_LOAD(): TerminalNode { return this.getToken(BaseRqlParser.TS_LOAD, 0); }
	public tsAlias(): TsAliasContext {
		return this.getRuleContext(0, TsAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsLoadStatement; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsLoadStatement) {
			return visitor.visitTsLoadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsAliasContext extends ParserRuleContext {
	public _alias_text!: TsLiteralContext;
	public TS_AS(): TerminalNode { return this.getToken(BaseRqlParser.TS_AS, 0); }
	public tsLiteral(): TsLiteralContext {
		return this.getRuleContext(0, TsLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsAlias; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsAlias) {
			return visitor.visitTsAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsFROMContext extends ParserRuleContext {
	public _name!: TsCollectionNameContext;
	public TS_FROM(): TerminalNode { return this.getToken(BaseRqlParser.TS_FROM, 0); }
	public tsCollectionName(): TsCollectionNameContext {
		return this.getRuleContext(0, TsCollectionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsFROM; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsFROM) {
			return visitor.visitTsFROM(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsWHEREContext extends ParserRuleContext {
	public TS_WHERE(): TerminalNode { return this.getToken(BaseRqlParser.TS_WHERE, 0); }
	public tsExpr(): TsExprContext {
		return this.getRuleContext(0, TsExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsWHERE; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsWHERE) {
			return visitor.visitTsWHERE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsExpr; }
	public copyFrom(ctx: TsExprContext): void {
		super.copyFrom(ctx);
	}
}
export class TsMathExpressionContext extends TsExprContext {
	public _left!: TsExprContext;
	public _right!: TsExprContext;
	public TS_MATH(): TerminalNode { return this.getToken(BaseRqlParser.TS_MATH, 0); }
	public tsExpr(): TsExprContext[];
	public tsExpr(i: number): TsExprContext;
	public tsExpr(i?: number): TsExprContext | TsExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsExprContext);
		} else {
			return this.getRuleContext(i, TsExprContext);
		}
	}
	constructor(ctx: TsExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsMathExpression) {
			return visitor.visitTsMathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TsBinaryExpressionContext extends TsExprContext {
	public _left!: TsExprContext;
	public _right!: TsExprContext;
	public tsBinary(): TsBinaryContext {
		return this.getRuleContext(0, TsBinaryContext);
	}
	public tsExpr(): TsExprContext[];
	public tsExpr(i: number): TsExprContext;
	public tsExpr(i?: number): TsExprContext | TsExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsExprContext);
		} else {
			return this.getRuleContext(i, TsExprContext);
		}
	}
	constructor(ctx: TsExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsBinaryExpression) {
			return visitor.visitTsBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TsOpParContext extends TsExprContext {
	public TS_OP_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_OP_PAR, 0); }
	public tsExpr(): TsExprContext {
		return this.getRuleContext(0, TsExprContext);
	}
	public TS_CL_PAR(): TerminalNode { return this.getToken(BaseRqlParser.TS_CL_PAR, 0); }
	constructor(ctx: TsExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsOpPar) {
			return visitor.visitTsOpPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TsBooleanExpressionContext extends TsExprContext {
	public TS_TRUE(): TerminalNode { return this.getToken(BaseRqlParser.TS_TRUE, 0); }
	public TS_AND(): TerminalNode { return this.getToken(BaseRqlParser.TS_AND, 0); }
	public tsExpr(): TsExprContext {
		return this.getRuleContext(0, TsExprContext);
	}
	public TS_NOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_NOT, 0); }
	constructor(ctx: TsExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsBooleanExpression) {
			return visitor.visitTsBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TsLiteralExpressionContext extends TsExprContext {
	public tsLiteral(): TsLiteralContext {
		return this.getRuleContext(0, TsLiteralContext);
	}
	constructor(ctx: TsExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsLiteralExpression) {
			return visitor.visitTsLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsBetweenContext extends ParserRuleContext {
	public _from!: TsLiteralContext;
	public _to!: TsLiteralContext;
	public TS_BETWEEN(): TerminalNode { return this.getToken(BaseRqlParser.TS_BETWEEN, 0); }
	public TS_AND(): TerminalNode { return this.getToken(BaseRqlParser.TS_AND, 0); }
	public tsLiteral(): TsLiteralContext[];
	public tsLiteral(i: number): TsLiteralContext;
	public tsLiteral(i?: number): TsLiteralContext | TsLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsLiteralContext);
		} else {
			return this.getRuleContext(i, TsLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsBetween; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsBetween) {
			return visitor.visitTsBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsBinaryContext extends ParserRuleContext {
	public TS_AND(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_AND, 0); }
	public TS_OR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsBinary; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsBinary) {
			return visitor.visitTsBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsLiteralContext extends ParserRuleContext {
	public TS_DOL(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_DOL, 0); }
	public TS_WORD(): TerminalNode[];
	public TS_WORD(i: number): TerminalNode;
	public TS_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_WORD);
		} else {
			return this.getToken(BaseRqlParser.TS_WORD, i);
		}
	}
	public TS_NUM(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_NUM, 0); }
	public tsIdentifiers(): TsIdentifiersContext[];
	public tsIdentifiers(i: number): TsIdentifiersContext;
	public tsIdentifiers(i?: number): TsIdentifiersContext | TsIdentifiersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsIdentifiersContext);
		} else {
			return this.getRuleContext(i, TsIdentifiersContext);
		}
	}
	public TS_STRING(): TerminalNode[];
	public TS_STRING(i: number): TerminalNode;
	public TS_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_STRING);
		} else {
			return this.getToken(BaseRqlParser.TS_STRING, i);
		}
	}
	public TS_OP_Q(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_OP_Q, 0); }
	public TS_CL_Q(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_CL_Q, 0); }
	public TS_DOT(): TerminalNode[];
	public TS_DOT(i: number): TerminalNode;
	public TS_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_DOT);
		} else {
			return this.getToken(BaseRqlParser.TS_DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsLiteral; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsLiteral) {
			return visitor.visitTsLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsTimeRangeFirstContext extends ParserRuleContext {
	public _num!: Token;
	public _size!: Token;
	public TS_FIRST(): TerminalNode { return this.getToken(BaseRqlParser.TS_FIRST, 0); }
	public TS_NUM(): TerminalNode { return this.getToken(BaseRqlParser.TS_NUM, 0); }
	public TS_TIMERANGE(): TerminalNode { return this.getToken(BaseRqlParser.TS_TIMERANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsTimeRangeFirst; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsTimeRangeFirst) {
			return visitor.visitTsTimeRangeFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsTimeRangeLastContext extends ParserRuleContext {
	public _num!: Token;
	public _size!: Token;
	public TS_LAST(): TerminalNode { return this.getToken(BaseRqlParser.TS_LAST, 0); }
	public TS_NUM(): TerminalNode { return this.getToken(BaseRqlParser.TS_NUM, 0); }
	public TS_TIMERANGE(): TerminalNode { return this.getToken(BaseRqlParser.TS_TIMERANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsTimeRangeLast; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsTimeRangeLast) {
			return visitor.visitTsTimeRangeLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsCollectionNameContext extends ParserRuleContext {
	public TS_WORD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_WORD, 0); }
	public TS_STRING(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_STRING, 0); }
	public tsIdentifiers(): TsIdentifiersContext | undefined {
		return this.tryGetRuleContext(0, TsIdentifiersContext);
	}
	public TS_DOT(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_DOT, 0); }
	public tsCollectionName(): TsCollectionNameContext | undefined {
		return this.tryGetRuleContext(0, TsCollectionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsCollectionName; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsCollectionName) {
			return visitor.visitTsCollectionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsGroupByContext extends ParserRuleContext {
	public _name!: TsCollectionNameContext;
	public TS_GROUPBY(): TerminalNode { return this.getToken(BaseRqlParser.TS_GROUPBY, 0); }
	public tsCollectionName(): TsCollectionNameContext[];
	public tsCollectionName(i: number): TsCollectionNameContext;
	public tsCollectionName(i?: number): TsCollectionNameContext | TsCollectionNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsCollectionNameContext);
		} else {
			return this.getRuleContext(i, TsCollectionNameContext);
		}
	}
	public TS_COMMA(): TerminalNode[];
	public TS_COMMA(i: number): TerminalNode;
	public TS_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_COMMA);
		} else {
			return this.getToken(BaseRqlParser.TS_COMMA, i);
		}
	}
	public TS_WITH(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsGroupBy; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsGroupBy) {
			return visitor.visitTsGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsSelectContext extends ParserRuleContext {
	public _field!: TsSelectVariableContext;
	public TS_SELECT(): TerminalNode { return this.getToken(BaseRqlParser.TS_SELECT, 0); }
	public tsSelectVariable(): TsSelectVariableContext[];
	public tsSelectVariable(i: number): TsSelectVariableContext;
	public tsSelectVariable(i?: number): TsSelectVariableContext | TsSelectVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TsSelectVariableContext);
		} else {
			return this.getRuleContext(i, TsSelectVariableContext);
		}
	}
	public TS_COMMA(): TerminalNode[];
	public TS_COMMA(i: number): TerminalNode;
	public TS_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BaseRqlParser.TS_COMMA);
		} else {
			return this.getToken(BaseRqlParser.TS_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsSelect; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsSelect) {
			return visitor.visitTsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsSelectScaleProjectionContext extends ParserRuleContext {
	public TS_SCALE(): TerminalNode { return this.getToken(BaseRqlParser.TS_SCALE, 0); }
	public TS_NUM(): TerminalNode { return this.getToken(BaseRqlParser.TS_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsSelectScaleProjection; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsSelectScaleProjection) {
			return visitor.visitTsSelectScaleProjection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsSelectVariableContext extends ParserRuleContext {
	public TS_METHOD(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_METHOD, 0); }
	public tsLiteral(): TsLiteralContext | undefined {
		return this.tryGetRuleContext(0, TsLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsSelectVariable; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsSelectVariable) {
			return visitor.visitTsSelectVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TsIdentifiersContext extends ParserRuleContext {
	public TS_OR(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_OR, 0); }
	public TS_AND(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_AND, 0); }
	public TS_FROM(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_FROM, 0); }
	public TS_WHERE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_WHERE, 0); }
	public TS_GROUPBY(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_GROUPBY, 0); }
	public TS_TIMERANGE(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.TS_TIMERANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_tsIdentifiers; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitTsIdentifiers) {
			return visitor.visitTsIdentifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateBodyContext extends ParserRuleContext {
	public US_OP(): TerminalNode { return this.getToken(BaseRqlParser.US_OP, 0); }
	public US_CL(): TerminalNode { return this.getToken(BaseRqlParser.US_CL, 0); }
	public US_DATA(): TerminalNode | undefined { return this.tryGetToken(BaseRqlParser.US_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BaseRqlParser.RULE_updateBody; }
	// @Override
	public accept<Result>(visitor: BaseRqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateBody) {
			return visitor.visitUpdateBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

